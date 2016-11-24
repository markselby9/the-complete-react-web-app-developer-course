var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {todo} = this.props;

        return (
            <div>id: {todo.id}, content: {todo.text}</div>
        )
    }
});

module.exports = Todo;