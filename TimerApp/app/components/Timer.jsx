var React = require('react');
var Clock = require('Clock');
var TimerControls = require('Controls');

var Timer = React.createClass({
    onTimerStatusChange: function(newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },

    onSubmitSeconds: function(seconds) {
        this.setState({
            seconds: seconds,
            timerStatus: "started"
        })
    },

    getInitialState: () => ({
        seconds: 0,
        timerStatus: "stopped"
    }),

    handleTimerStart: function () {
        this.timer = setInterval(()=>{
            let newseconds = this.state.seconds + 1;
            this.setState({
                seconds: newseconds
            });
        }, 1000);
    },

    componentDidUpdate: function(prevProps, prevState){
        if (this.state.timerStatus!==prevState.timerStatus){
            switch (this.state.timerStatus){
                case "started":
                    this.handleTimerStart();
                    break;
                case "stopped":
                    this.setState({
                        seconds: 0
                    });
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
        this.timer = undefined;
    },

    render: function () {
        let {seconds, timerStatus} = this.state;

        return (<div>
            <Clock totalSeconds={seconds}/>
            <TimerControls controlStatus={timerStatus} onStatusChange={this.onTimerStatusChange}/>
        </div>);
    }
});

module.exports = Timer;
