var React = require('react');
var WeatherForm = require('./weather/WeatherForm');
var WeatherMessage = require('./weather/WeatherMessage');
var openWeatherMapAPI = require('./api/openWeatherMap');
var ErrorModal = require('./ErrorModal');

var WeatherComponent = React.createClass({
    onEnterCityName: function (cityName) {
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            cityName: undefined,
            temperature: undefined
        });
        var that = this;
        openWeatherMapAPI.getWeather(cityName).then(function (weatherData) {
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
                isLoading: false,
                errorMessage: err.message
            });

            console.log(err);
        });
    },

    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    componentDidMount: function () {
        // pull location out of url
        var location = this.props.location.query.cityName; // react-router parses the location and get the query
        if (location && location.length > 0) {
            this.onEnterCityName(location);
            // remove the location from url
            window.location.hash = '/#';
        }

    },

    //Invoked when a component is receiving new props. This method is not called for the initial render.
    componentWillReceiveProps: function (nextProps) {
        var location = nextProps.location.query.cityName; // react-router parses the location and get the query
        if (location && location.length > 0) {
            this.onEnterCityName(location);
            // remove the location from url
            window.location.hash = '/#';
        }
    },

    render: function () {
        var {isLoading, cityName, weather, temperature, errorMessage} = this.state;
        var that = this;

        // conditionally render
        function renderMessage() {
            if (isLoading) {
                return (
                    <h3 className="text-center">The weather is loading...</h3>
                )
            } else if (temperature && cityName) {
                return (
                    <WeatherMessage {...that.state}/>
                )
            }
        }

        function renderErrorModal() {
            if (errorMessage && typeof errorMessage === "string") {
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onEnterCityName={this.onEnterCityName}/>
                {renderMessage()}
                {renderErrorModal()}
            </div>
        );
    }
});

module.exports = WeatherComponent;