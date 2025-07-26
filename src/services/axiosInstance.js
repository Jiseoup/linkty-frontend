import axios from 'axios';

import { getLoadingContext } from '../contexts/LoadingContext';

// Create axios instance for API requests.
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// Global variable to handle the multiple requests.
let pending = 0;

// Start loading function.
function startLoading() {
  const { setLoading } = getLoadingContext();
  if (!setLoading) return;
  if (pending === 0) setLoading(true);
  pending += 1;
}

// Stop loading function.
function stopLoading() {
  const { setLoading } = getLoadingContext();
  if (!setLoading) return;
  pending -= 1;
  if (pending <= 0) {
    pending = 0;
    setLoading(false);
  }
}

// Set up API request interceptors.
instance.interceptors.request.use(
  (config) => {
    startLoading();
    return config;
  },
  (error) => {
    stopLoading();
    return Promise.reject(error);
  }
);

// Set up API response interceptors.
instance.interceptors.response.use(
  (response) => {
    stopLoading();
    return response;
  },
  (error) => {
    stopLoading();
    return Promise.reject(error);
  }
);

export default instance;
