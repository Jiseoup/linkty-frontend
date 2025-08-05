import axios from 'axios';

import {
  getGlobalAccessToken,
  setGlobalAccessToken,
} from '../contexts/AccessTokenContext';
import { getGlobalSetLoading } from '../contexts/LoadingContext';
import { postRefreshToken } from '../services/user';

// Create axios instance for API requests.
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// Global variable to handle the multiple requests.
let pending = 0;

// Start loading function.
function startLoading() {
  const { setLoading } = getGlobalSetLoading();
  if (!setLoading) return;
  if (pending === 0) setLoading(true);
  pending += 1;
}

// Stop loading function.
function stopLoading() {
  const { setLoading } = getGlobalSetLoading();
  if (!setLoading) return;
  pending -= 1;
  if (pending <= 0) {
    pending = 0;
    setLoading(false);
  }
}

// Set up API request interceptors.
axiosInstance.interceptors.request.use(
  (config) => {
    startLoading();

    // Get access token and set authorization header.
    const { accessToken } = getGlobalAccessToken();
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    stopLoading();
    return Promise.reject(error);
  }
);

// Set up API response insterceptors.
axiosInstance.interceptors.response.use(
  (response) => {
    stopLoading();
    return response;
  },
  async (error) => {
    stopLoading();

    const requestConfig = error.config;
    // If the 401 Unauthorized error occurs while the user is logged in.
    if (
      error.response?.status === 401 &&
      localStorage.getItem('loggedIn') === 'true' &&
      !requestConfig._isRetry
    ) {
      requestConfig._isRetry = true;

      try {
        // Refresh token and get a new access token.
        const response = await postRefreshToken();
        const accessToken = response.accessToken;

        // Update the global access token and set it in the authorization header.
        setGlobalAccessToken(accessToken);
        requestConfig.headers.Authorization = `Bearer ${accessToken}`;

        // Retry the request with the updated authorization header.
        return axiosInstance(requestConfig);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
