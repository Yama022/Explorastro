import axios from 'axios';

const api = axios.create({
  baseURL: 'https://explorastro-api.herokuapp.com/',
  timeout: 2500,
});

export default api;
