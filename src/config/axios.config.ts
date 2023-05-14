import axios from 'axios';

export const axiosInstante = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL
});