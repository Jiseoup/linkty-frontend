import axios from 'axios';

import { getLoadingContext } from '../contexts/LoadingContext';

// Create axios instance for API requests.
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Set up API request interceptors.
instance.interceptors.request.use(
  (config) => {
    const { setLoading } = getLoadingContext();
    setLoading?.(true);
    return config;
  },
  (error) => {
    const { setLoading } = getLoadingContext();
    setLoading?.(false);
    return Promise.reject(error);
  }
);

// Set up API response interceptors.
instance.interceptors.response.use(
  (response) => {
    const { setLoading } = getLoadingContext();
    setLoading?.(false);
    return response;
  },
  (error) => {
    const { setLoading } = getLoadingContext();
    setLoading?.(false);
    return Promise.reject(error);
  }
);

export default instance;
