import axios from 'axios';

const backendUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
    baseURL: backendUrl,
    headers: {
        "Content-Type": "application/json"  //req-body is in json-format
    },
});

export default axiosInstance;
