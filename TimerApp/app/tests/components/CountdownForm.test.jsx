var CountdownForm = require('CountdownForm');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

define('Countdown Form', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSubmitSeconds={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        var form = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');
        TestUtils.Simulate.submit(form);
        console.log(3);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSubmitSeconds={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';
        var form = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');
        TestUtils.Simulate.submit(form);

        expect(spy).toNotHaveBeenCalled();
    });
});