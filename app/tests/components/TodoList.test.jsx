var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var jquery = require('jquery');

var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each item', () => {
        let faketodos = [
            {id: 1, text: "item 1"},
            {id: 2, text: "item 2"}
        ];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={faketodos}/>);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(2);
    })
});