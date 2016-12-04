var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id: uuid(), text: "item 1"},
                {id: uuid(), text: "item 2"},
                {id: uuid(), text: "item 3"},
            ],
            showCompleted: false,
            searchText: ''
        };
    },

    handleNewTodo: function (todoText) {
        // let oldTodos = this.state.todos;
        // oldTodos.push({id: oldTodos.length+1, text: todoText});
        this.setState({
            todos: [...this.state.todos,
                {id: uuid(), text: todoText}]
        });
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div>TodoApp
                <TodoSearch handleSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo handleNewTodo={this.handleNewTodo}/>
            </div>

        )
    }
});

module.exports = TodoApp;