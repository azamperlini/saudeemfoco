import axios from 'axios';
import provedor from '@/provedor';

const http = axios.create({
  baseURL: 'https://apisaude.herokuapp.com/',
});

http.interceptors.request.use((config) => {
  const { token } = provedor.state;
  if (token) {
    /* eslint no-param-reassign: "error" */
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (erro) => Promise.reject(erro));

export default http;
