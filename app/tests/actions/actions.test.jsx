var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', ()=>{
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', ()=>{
        var action = {
            type: 'ADD_TODO',
            todoText: 'Some todo text'
        };
        var res = actions.addTodo(action.todoText);
        expect(res).toEqual(action);
    });
});