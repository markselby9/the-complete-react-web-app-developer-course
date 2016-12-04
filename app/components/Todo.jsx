var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed} = this.props;

        return (
            <div onClick={() => {
                this.props.onToggleTodo(id);
            }}>
                <input type="checkbox" checked={completed}/>
                id: {id}, content: {text}
            </div>
        )
    }
});

module.exports = Todo;