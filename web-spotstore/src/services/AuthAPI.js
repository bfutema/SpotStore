import axios from 'axios';

const apiAuth = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export default apiAuth;