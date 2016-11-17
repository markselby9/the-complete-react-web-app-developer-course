var React = require('react');
var WeatherForm = require('./weather/WeatherForm');
var WeatherMessage = require('./weather/WeatherMessage');
var openWeatherMapAPI = require('./api/openWeatherMap');

var WeatherComponent = React.createClass({
    onEnterCityName: function(cityName){
        this.setState({
            isLoading: true
        });
        var that = this;
        openWeatherMapAPI.getWeather(cityName).then(function(weatherData){
            that.setState({
                isLoading: false
            });

            console.log(weatherData);
            that.setState({
                cityName: weatherData.name,
                weather: weatherData.weather[0].main,
                temperature: weatherData.main.temp
            });
        }, function (err) {
            that.setState({
                isLoading: false
            });

            console.log(err);
        });
    },

    getInitialState: function(){
        return {
            isLoading: false
        }
    },

    render: function () {
        var {isLoading, cityName, weather, temperature} = this.state;
        var that = this;

        // conditionally render
        function renderMessage(){
            if (isLoading){
                return (
                    <h3>The weather is loading...</h3>
                )
            } else if (temperature && cityName){
                return (
                    <WeatherMessage {...that.state}/>
                )
            }
        }

        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onEnterCityName={this.onEnterCityName}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = WeatherComponent;