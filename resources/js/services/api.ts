import axios from 'axios';

const token:string = document.getElementById('csrf-token').getAttribute('content') as string;
const api = axios.create({
    baseURL: "http://cruds.local/api",
    // headers: {
    //     'X-CSRF-TOKEN': token,
    //     'Content-Type':'application/json'
    // }
});

export default api;

