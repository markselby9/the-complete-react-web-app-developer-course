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
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;
        // filter by completed
        filteredTodos = filteredTodos.filter(function (todo) {
            return !todo.completed || showCompleted;    // show completed filter
        });

        // filter by text
        if (searchText.length!==0) {
            searchText = searchText.toLowerCase();
            filteredTodos = filteredTodos.filter(function (todo) {
                return todo.text.toLowerCase().indexOf(searchText) !== -1;

            })
        }

        // sort by completed
        filteredTodos = filteredTodos.sort(function (todo1, todo2) {
            if (!todo1.completed && todo2.completed) {
                return -1;
            }
            if (todo1.completed && !todo2.completed) {
                return 1;
            }
            return 0;
        });

        return filteredTodos;
    }
};