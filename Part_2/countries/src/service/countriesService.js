import axios from "axios";
const BASE_URL = import.meta.env.VITE_COUNTRY_API_URL

const getAllCountries = () => {
    return axios.get(`${BASE_URL}/all`);
}

export default {getAllCountries}