var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id:1, text:"item 1"},
                {id:2, text:"item 2"},
                {id:2, text:"item 3"},
            ]
        };
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div>TodoApp
                <TodoList todos={todos}/>
            </div>

        )
    }
});

module.exports = TodoApp;