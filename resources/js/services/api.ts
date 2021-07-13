import axios from 'axios';

const api = axios.create({
    baseURL: "http://cruds.local/api",
});

export default api;

