var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var CountdownControl = require('CountdownControl');

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
                    this.setState({
                        seconds: 0
                    });
                    // break;
                case "paused":
                    clearInterval(this.timer);  //clear the setInterval
                    this.timer = undefined;
                    break;
            }
        }
    },

    handleStatusChange: function(newStatus){
        this.setState({
            countDownStatus: newStatus
        });
    },

    render: function () {
        let {seconds, countDownStatus} = this.state;

        var renderControlArea = ()=>{
            if (this.state.countDownStatus=="stopped"){
                return <CountdownForm onSubmitSeconds={this.onSubmitSeconds}/>;
            }else if (this.state.countDownStatus=="started" || this.state.countDownStatus=="paused"){
                return <CountdownControl countdownStatus={countDownStatus} onStatusChange={this.handleStatusChange}/>
            }
        };

        return (<div>
            <Clock totalSeconds={seconds}/>
            {renderControlArea()}
        </div>);
    }
});

module.exports = Countdown;
