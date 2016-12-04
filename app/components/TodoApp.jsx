var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id:1, text:"item 1"},
                {id:2, text:"item 2"},
                {id:3, text:"item 3"},
            ]
        };
    },

    handleNewTodo: function (todoText) {
        let oldTodos = this.state.todos;
        oldTodos.push({id: oldTodos.length+1, text: todoText});
        this.setState({
            todos: oldTodos
        });
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div>TodoApp
                <TodoList todos={todos}/>
                <AddTodo handleNewTodo={this.handleNewTodo}/>
            </div>

        )
    }
});

module.exports = TodoApp;