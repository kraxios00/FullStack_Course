import axios from "axios";
const BASE_URL = import.meta.env.VITE_WEATHER_API_URL
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherByCountry = (lat, long) => {
    return axios.get(`${BASE_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}`);
}

export default {getWeatherByCountry}