var axios = require('axios');

var openWeatherAPIKey = "644a71a9f5697e0ad305b4c18c4a6d54";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?appid=644a71a9f5697e0ad305b4c18c4a6d54&units=metric";

module.exports = {
    getWeather: function(cityName){
        var encodedCityName = encodeURIComponent(cityName);
        var requestURL = `${apiURL}&q=${encodedCityName}`;
        console.log(requestURL);
        return axios.get(requestURL).then(function(response){
            if (response.data.cod && response.data.mesasge){
                throw new Error(response);
            }
            return response.data;
        }, function(fail_res){
            console.log(fail_res);
            throw new Error(fail_res);
        });
    }
};