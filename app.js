const place = require('./place/place'),
    weather = require('./weather/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direction ofcity to obtain weather',
        demmnd: true
    }
}).argv;

let getInfo = async(direction) => {

    try {

        let coords = await place.getPlaceLatLng(argv.direction);
        let temp = await weather.getWeather(coords.lat, coords.lng);

        return `Weather for  ${ coords.direction } is ${ temp }`;
    } catch (e) {
        return `An error ocurred triying to get weather of ${direction}`;
    }
}

getInfo(argv.direction)
    .then(message => console.log(message))
    .catch(e => console.log(e))