import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prattu-api.herokuapp.com/',
});

export default api;
