var React = require('react');

var WeatherFormComponent = React.createClass({
    onFormSubmit: function(event){
        event.preventDefault();

        var cityName = this.refs.cityName.value;
        if (cityName.length>0){
            this.props.onEnterCityName(cityName);
        }
        this.refs.cityName.value = "";
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input placeholder="Enter city name" ref="cityName"/>
                <button>Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherFormComponent;