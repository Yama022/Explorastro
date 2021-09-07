import axios from 'axios';

const api = axios.create({
  baseURL: 'https://explorastro-api.herokuapp.com/',
  timeout: 20000,
});

export default api;
