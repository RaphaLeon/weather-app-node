const axios = require('axios');

const getPlaceLatLng = async(direction) => {

    let encodedUrl = encodeURI(direction)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCCAOgdeAQw8QA_1vyu3rSiWkIOZzPlyAU`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`Resuts not found to ${direction}`);
    }

    let location = resp.data.results[0],
        coord = location.geometry.location;

    return {
        direction: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getPlaceLatLng
}