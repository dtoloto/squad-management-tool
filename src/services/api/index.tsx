/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

api.interceptors.request.use(
  (config: any) => {
    config.headers['x-rapidapi-key'] = `${process.env.REACT_APP_API_KEY}`;
    config.headers['x-rapidapi-host'] = `${process.env.REACT_APP_API_HOST}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
