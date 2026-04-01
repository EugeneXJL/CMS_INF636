import axios from 'axios';

const isLocal = window.location.hostname === 'localhost';

const axiosInstance = axios.create({
  baseURL: isLocal ? 'http://localhost:5001' : '',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
