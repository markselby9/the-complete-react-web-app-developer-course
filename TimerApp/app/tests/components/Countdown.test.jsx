var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handle Countdown', ()=>{
        it('should set state to started and begin countdown', ()=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.onSubmitSeconds(3);

            expect(countdown.state.seconds).toBe(3);
            expect(countdown.state.countDownStatus).toBe("started");

            setTimeout(()=>{
                expect(countdown.state.seconds).toBe(2);
                done();
            }, 1050)
        });


        it('should set clock to stop after the time passed', ()=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.onSubmitSeconds(1);

            expect(countdown.state.seconds).toBe(1);
            expect(countdown.state.countDownStatus).toBe("started");

            setTimeout(()=>{
                expect(countdown.state.seconds).toBe(0);
                done();
            }, 2050)
        })
    });
});