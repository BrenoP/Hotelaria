import axios from 'axios';

const api = axios.create({
  baseURL: "http://dinnosdev.com.br/hotelaria/API/v2/public/",
});

export default api;
