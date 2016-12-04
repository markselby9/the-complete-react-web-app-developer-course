var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should tell TodoApp when submit valid data', ()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        var todoText = 'check email';
        addTodo.refs.NewTodoText.value=todoText;
        var form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        TestUtils.Simulate.submit(form);

        expect(spy).toHaveBeenCalledWith(todoText);
    });
    it('should tell TodoApp when submit valid data', ()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        var todoText = '';
        addTodo.refs.NewTodoText.value=todoText;
        var form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        TestUtils.Simulate.submit(form);

        expect(spy).toNotHaveBeenCalled();
    });
});