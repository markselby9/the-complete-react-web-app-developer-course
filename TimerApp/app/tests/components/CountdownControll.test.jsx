var CountdownControl = require('CountdownControl');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

define('CountdownControls', () => {
    it('should exist', () => {
        expect(CountdownControl).toExist();
    });

    describe('render', ()=>{
        it('should render pause when started', ()=>{
            var control = TestUtils.renderIntoDocument(<CountdownControl countdownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(control));

            var $pauseButton = $el.find('button:contains(Pause)');
            expect($pauseButton.length).toBe(1);
        });

        it('should render continue when paused', ()=>{
            var control = TestUtils.renderIntoDocument(<CountdownControl countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(control));

            var $pauseButton = $el.find('button:contains(Continue)');
            expect($pauseButton.length).toBe(1);
        });
    });
});