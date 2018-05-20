const axios = require('axios');

const getWeather = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=71348f15d710e8de3b928a0934a7cc63`)
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}