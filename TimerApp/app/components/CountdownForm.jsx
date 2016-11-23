var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(event) {
        event.preventDefault();
        var secondsString = this.refs.seconds.value;
        if (secondsString.match(/^[0-9]+$/)){
            this.props.onSubmitSeconds(parseInt(secondsString, 10));
        }
        this.refs.seconds.value = '';
    },

    render: function(){
        return (
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                <input type="number" ref="seconds" placeholder="seconds to countdown"/>
                <button className="button expanded" type="submit">Start</button>
            </form>
        );
    }
});

module.exports = CountdownForm;