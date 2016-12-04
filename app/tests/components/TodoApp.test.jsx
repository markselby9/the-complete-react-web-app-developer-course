var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var jquery = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo successfully on handleNewTodo', ()=>{
        var todoText='test';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
        todoApp.setState({
            todos: []
        });
        todoApp.handleNewTodo(todoText);
        var todosNow = todoApp.state.todos;
        expect(todosNow.length).toBe(1);
        expect(todosNow[0].text).toBe(todoText);
    })
});