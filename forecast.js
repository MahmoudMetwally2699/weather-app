const forcast = (lon, lat, callback) => {
    const appId = "1e980e73909374e4bd27b2a6556c2845";
    const request = require('request');

    const link = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + appId + "&units=metric";
    request({ url: link, json: true }, (error, JSON) => {
        if (error) {
            callback("Big Error")
        } else if (JSON.body.error) {
            callback("Big Error")
        } else {
            callback(undefined, {
                current: JSON.body.current.temp,
            });
        }






    });
}
module.exports = forcast;