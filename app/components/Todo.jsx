var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text} = this.props;

        return (
            <div>id: {id}, content: {text}</div>
        )
    }
});

module.exports = Todo;