var React = require('react');

var WeatherMessageComponent = (props) => {
    var {cityName, weather, temperature} = props;
    return (
        <div>
            <p>City name: {cityName}</p><br/>
            <p>Weather: {weather}</p><br/>
            <p>Temperature: {temperature}</p>

        </div>
    );
};

module.exports = WeatherMessageComponent;