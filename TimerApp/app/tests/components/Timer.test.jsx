var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.onTimerStatusChange('started');
        expect(timer.state.seconds).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.seconds).toBe(1);
            done();
        }, 1001);
    });

    it('should pause timer on paused status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({seconds: 10});
        timer.onTimerStatusChange('started');
        timer.onTimerStatusChange('paused');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.seconds).toBe(10);
            done();
        }, 1001);
    });

    it('should clear count on stopped status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({seconds: 10});
        timer.onTimerStatusChange('started');
        timer.onTimerStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.seconds).toBe(0);
            done();
        }, 1001);
    });
});
