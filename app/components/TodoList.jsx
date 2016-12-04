var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    render: function () {
        var {todos} = this.props;

        // render a list using .map and arrow function
        var renderTodoList = () => {
            return todos.map((todo) => <Todo key={todo.id} onToggleTodo={this.props.onToggleTodo} {...todo}/>);
            // key property: help track and identify the element
            //... spread out the 'todo' prop
        };

        return (
            <div>
                {renderTodoList()}
            </div>
        )
    }
});

module.exports = TodoList;