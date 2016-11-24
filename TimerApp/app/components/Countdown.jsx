var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    onSubmitSeconds: function (seconds) {
        this.setState({
            seconds: seconds,
            countDownStatus: "started"
        });
    },

    getInitialState: () => ({
        seconds: 0,
        countDownStatus: "stopped"
    }),

    startTimer: function () {
        this.timer = setInterval(()=>{
            var newSeconds =this.state.seconds-1;
            if (newSeconds<0){
                newSeconds=0;
            }
            this.setState({
                seconds: newSeconds
            });
        }, 1000);
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            // countDownStatus has changed
            switch (this.state.countDownStatus){
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    break;
            }
        }
    },

    render: function () {
        let {seconds, countDownStatus} = this.state;
        return (<div>
            <Clock totalSeconds={seconds}/>
            <CountdownForm onSubmitSeconds={this.onSubmitSeconds}/>
        </div>);
    }
});

module.exports = Countdown;
