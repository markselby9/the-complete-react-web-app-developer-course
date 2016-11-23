var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    onSubmitSeconds: function (seconds) {
        this.setState({
            seconds: seconds
        });
    },

    getInitialState: () => ({
        seconds: 0
    }),

    render: function () {
        let {seconds} = this.state;
        return (<div>
            <Clock totalSeconds={seconds}/>
            <CountdownForm onSubmitSeconds={this.onSubmitSeconds}/>
        </div>);
    }
});

module.exports = Countdown;
