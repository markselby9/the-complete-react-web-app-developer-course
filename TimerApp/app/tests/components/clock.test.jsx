var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('format seconds', ()=>{
        it('should format seconds correctly', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);

            expect(clock.formatSeconds(61)).toBe('01:01');
            expect(clock.formatSeconds(233)).toBe('03:53');
        });
    });

    describe('render', ()=>{
        it('should render clock to output', ()=>{
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));   // convert component to HTML DOM element
            var actualText = $el.find('.clock-text').text();
            expect(actualText).toBe('01:02');
        });
    });
});