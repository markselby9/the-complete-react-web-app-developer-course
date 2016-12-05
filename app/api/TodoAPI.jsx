var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var todos = [];
        var raw = localStorage.getItem('todos');
        try {
            todos = JSON.parse(raw);
        } catch (e) {

        }
        return ($.isArray(todos)) ? todos : [];
    }
};