var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    render: function () {
        var {todos} = this.props;

        // render a list using .map and arrow function
        var renderTodoList = () => {
            if (todos.length===0){
                return <div><p>Nothing to do yet!</p></div>
            }
            return todos.map((todo) => <Todo key={todo.id} handleToggle={this.props.handleToggle} {...todo}/>);
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