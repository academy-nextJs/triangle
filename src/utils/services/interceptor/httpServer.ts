import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { getServerCookie } from '@/utils/helper/cookie/getServerCookie';

const httpServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

httpServer.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await getServerCookie("serverAccessToken");

  if (token) {
    config.headers = config.headers || {}; 
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default httpServer;