import axios from 'axios';

const meta_data = document.getElementById('csrf-token') as HTMLMetaElement;
const token     = meta_data.getAttribute('content');

const api = axios.create({
    baseURL: "http://cruds.local/api",
    headers: {
        'X-CSRF-TOKEN': token,
        'Content-Type':'application/json'
    }
});

export default api;

