import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
  params: {
    apikey: '23JR7N38DO3LVLYM',
  },
});

export default api;