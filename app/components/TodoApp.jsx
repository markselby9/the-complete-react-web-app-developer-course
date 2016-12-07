var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    handleNewTodo: function (todoText) {
        // let oldTodos = this.state.todos;
        // oldTodos.push({id: oldTodos.length+1, text: todoText});
        this.setState({
            todos: [...this.state.todos,
                {
                    id: uuid(),
                    text: todoText,
                    completed: false,
                    createdAt: moment().unix()
                }]
        });
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    handleToggle: function (id) {
        var updateTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                if (todo.completed){
                    todo.completedAt = moment().unix();
                }else{
                    todo.completedAt = undefined;
                }
            }
            return todo;
        });
        this.setState({
            todos: updateTodos
        });
    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>TodoApp
                <TodoSearch handleSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} handleToggle={this.handleToggle}/>
                <AddTodo handleNewTodo={this.handleNewTodo}/>
            </div>

        )
    }
});

module.exports = TodoApp;