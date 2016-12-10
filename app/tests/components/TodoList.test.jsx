var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
// var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from "TodoList";
import {Todo} from "Todo";
import {configure} from "configStore";
var {Provider} = require('react-redux');


describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: undefined,
            createdAt: 123
        }, {
            id: 2,
            text: 'Check mail',
            completed: false,
            completedAt: undefined,
            createdAt: 123
        }];
        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
