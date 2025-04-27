import axios from 'axios';
import { getClientToken } from '@/utils/helper/cookie/getClientToken';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
});

httpClient.interceptors.request.use((config) => {
  const token = getClientToken();

  if (token) {
    config.headers.Authorization =`Bearer ${token}` ;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default httpClient;