var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call handleSearch when have search form input', ()=>{
        var spy = expect.createSpy();
        var TodoSearchele = TestUtils.renderIntoDocument(<TodoSearch handleSearch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(TodoSearchele));

        var searchText = 'check';
        TodoSearchele.refs.searchText.value=searchText;
        TestUtils.Simulate.change(TodoSearchele.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, searchText);
    });

    it('should call handleSearch when have search form input', ()=>{
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch handleSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});