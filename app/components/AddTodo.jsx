var React = require('react');

var AddTodo = React.createClass({
    handleClickAddNewTodo: function (event) {
        event.preventDefault();
        var newTodoText = this.refs.NewTodoText.value;
        if (newTodoText.length>0){
            this.props.handleNewTodo(newTodoText);
        }else{
            this.refs.NewTodoText.focus();
        }
        this.refs.NewTodoText.value = "";
    },

    render: function () {
        return (<form onSubmit={this.handleClickAddNewTodo}>
            <label>New Todo: </label>
            <input type="text" ref="NewTodoText" placeholder="new todo"/>
            <button className="button expanded">Add</button>
        </form>);
    }
});

module.exports = AddTodo;