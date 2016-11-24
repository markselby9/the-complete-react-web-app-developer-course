var React = require('react');
var Clock = require('Clock');
var ControlStartForm = require('ControlStartForm');
var CountdownControl = require('Controls');

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
            this.timer = setInterval(() => {
                var newSeconds = this.state.seconds - 1;
                if (newSeconds < 0) {
                    newSeconds = 0;
                }
                this.setState({
                    seconds: newSeconds
                });

                if (newSeconds === 0) {
                    this.setState({countDownStatus: "stopped"});
                }
            }, 1000);
        },

        componentDidUpdate: function (prevProps, prevState) {
            if (this.state.countDownStatus !== prevState.countDownStatus) {
                // countDownStatus has changed
                switch (this.state.countDownStatus) {
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

        componentWillUpdate: function (nextProps, nextState) {
            console.log('componentWillUpdate', nextProps, nextState);
        },

        componentWillMount: function () {
            // as the component first get mounted, rendered to the screen
            console.log("componentWillMount");
        },
        componentDidMount: function () {
            // right after the component is renderded
            console.log("componentDidMount");
        },

        componentWillUnmount: function () {
            // when the component is removed from the browser
            console.log("componentWillUnmount");
            clearInterval(this.timer);
            this.timer = undefined;
        },

        handleStatusChange: function (newStatus) {
            this.setState({
                countDownStatus: newStatus
            });
        }
        ,

        render: function () {
            let {seconds, countDownStatus} = this.state;

            var renderControlArea = () => {
                if (this.state.countDownStatus == "stopped") {
                    return <ControlStartForm onSubmitSeconds={this.onSubmitSeconds}/>;
                } else if (this.state.countDownStatus == "started" || this.state.countDownStatus == "paused") {
                    return <CountdownControl controlStatus={countDownStatus} onStatusChange={this.handleStatusChange}/>
                }
            };

            return (<div>
                <Clock totalSeconds={seconds}/>
                {renderControlArea()}
            </div>);
        }
    })
    ;

module.exports = Countdown;
