const geoloc = (address, callback) => {
    const request = require('request');
    const appId = "1e980e73909374e4bd27b2a6556c2845";
    //const link = "http://api.openweathermap.org/geo/1.0/direct?q=" + encodeURI(address) + "&limit=5&appid=" + appId;
    const link = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(address) + "&appid=" + appId + "&units=metric"
    request({ url: link, json: true }, (error, JSON) => {
        if (error) {
            callback("ERROR");
        } else if (JSON.body.error) {
            console.log("hnaa");
        } else {
            console.log(JSON.body),

                callback(undefined, {
                    location: JSON.body.name,
                    temp: JSON.body.main.temp,
                })
        }


    })
}
module.exports = geoloc;