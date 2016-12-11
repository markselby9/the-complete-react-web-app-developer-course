var expect = require('expect');
var reducers = require('reducers');

// deep freeze arguments, so that no changes can be made to the arguments or the test would fail.
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var response = reducers.searchTextReducer(df(''), df(action));
            expect(response).toEqual(action.searchText);
        });

        it('should toggle show completed status', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var response = reducers.showCompletedReducer(df(false), df(action));
            expect(response).toEqual(true);
        })
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todoText: 'play basketball'
            };
            var response = reducers.todosReducer(df([]), df(action));
            expect(response.length).toEqual(1);
            expect(response[0].todoText).toEqual(action.todoText);
        });

        it('should toggle todo', ()=>{
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            var todoList = [
                {
                    id: 1,
                    todoText: 'drink',
                    completed: false,
                    createdAt: 111,
                    completedAt: undefined
                }
            ];
            var response = reducers.todosReducer(df(todoList), df(action));
            expect(response.length).toEqual(1);
            expect(response[0].completed).toEqual(true);
            expect(response[0].completedAt).toBeGreaterThan(0);
        });

        it('should toggle todo', ()=>{
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            var todoList = [
                {
                    id: 1,
                    todoText: 'drink',
                    completed: true,
                    createdAt: 111,
                    completedAt: 2333
                }
            ];
            var response = reducers.todosReducer(df(todoList), df(action));
            expect(response.length).toEqual(1);
            expect(response[0].completed).toEqual(false);
            expect(response[0].completedAt).toBe(undefined);
        });

        it('should add existing todos', ()=>{
            var todos = [{
                id: 111,
                text: 'bla',
                completed: false,
                completedAt: undefined,
                createdAt: 3300000
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        })
    })
});