const forecast = require('./forecast')
const geoloc = require('./geoloc')
const address = process.argv[2];
if (!address) {
    console.log("you dont provide country name");
} else {
    geoloc(address, (error, data) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(data.location + " : " + data.temp.toFixed(0) + " °C");
        // forecast(data.latt, data.long, (error, forecast) => {
        //     if (error) {
        //         return console.log('Error', error)
        //     }
        //     console.log(data.location + " : " + forecast.current + " celecius")


        // })
    })
}