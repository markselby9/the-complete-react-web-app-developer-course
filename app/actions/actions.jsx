// action generators
export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};

export var addTodo = (todoText) => {
    return {
        type: 'ADD_TODO',
        todoText
    }
};

export var toggleTodo = (id)=>{
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};
