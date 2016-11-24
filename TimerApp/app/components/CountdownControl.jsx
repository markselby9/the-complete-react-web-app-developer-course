var React = require('react');

var CountdownControl = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    onStatusChange: function(newStatus){
        return ()=>{
            this.props.onStatusChange(newStatus);
        }
    },

    componentWillReceiveProps: function(newProps){
        console.log('CountdownControl componentWillReceiveProps', newProps);
    },

    render: function () {
        var {countdownStatus} = this.props;
        var renderStartStopButton = ()=>{
            if (countdownStatus==="started"){
                return <button type="button" onClick={this.onStatusChange("paused")} className="button">Pause</button>;
            }else if (countdownStatus==="paused"){
                return <button type="button" onClick={this.onStatusChange("started")} className="button">Continue</button>;
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button type="button" onClick={this.onStatusChange("stopped")} className="button alert hollow">Stop</button>
            </div>
        )
    }
});

module.exports = CountdownControl;