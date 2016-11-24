var React = require('react');

var Controls = React.createClass({
    propTypes: {
        controlStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },

    componentWillReceiveProps: function (newProps) {
        console.log('Controls componentWillReceiveProps', newProps);
    },

    render: function () {
        var {controlStatus} = this.props;
        var renderStartStopButton = () => {
            if (controlStatus === "started") {
                return (<div>
                    <button type="button" onClick={this.onStatusChange("paused")} className="button">Pause</button>

                    <button type="button" onClick={this.onStatusChange("stopped")} className="button alert hollow">Stop
                    </button>
                </div>);
            } else if (controlStatus === "paused") {
                return (<div>
                    <button type="button" onClick={this.onStatusChange("started")} className="button">
                        Continue
                    </button>
                    <button type="button" onClick={this.onStatusChange("stopped")} className="button alert hollow">Stop
                    </button>
                </div>);
            }
            else {
                return <button type="button" onClick={this.onStatusChange("started")} className="button">
                    Start</button>;
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
            </div>
        )
    }
});

module.exports = Controls;