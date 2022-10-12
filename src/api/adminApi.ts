import axios from 'axios';

const baseURL = "https://covid-api.mmediagroup.fr/v1"

export const adminApi = axios.create({
    baseURL,
});