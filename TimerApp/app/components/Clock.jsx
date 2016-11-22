var React = require('react');

var Clock = React.createClass({
    formatSeconds: function(totalSeconds){
        let minutes = Math.floor(totalSeconds/60);
        let seconds = totalSeconds-minutes*60;
        if (seconds<10){
            seconds = '0'+seconds
        }
        if (minutes<10){
            minutes = '0'+minutes
        }
        return minutes+':'+seconds;
    },

    getDefaultProps: () => {
        return {totalSeconds:0};
    },
    propTypes: {
        totalSeconds: React.PropTypes .number
    },

    render: function () {
        let {totalSeconds} = this.props;

        return (
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
            </div>
        )
    }
});

module.exports = Clock;