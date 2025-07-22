import { useEffect } from 'react';

import { useAccessTokenContext } from '../../../contexts/AccessTokenContext';
import axiosInstance from '../../../services/axiosInstance';

// Common AxiosInterceptor Component for adding Authorization headers.
function AxiosInterceptor() {
  const { accessToken } = useAccessTokenContext();

  useEffect(() => {
    // Add request interceptor to include Authorization header.
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Cleanup the interceptor on unmount or accessToken change.
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);

  return null;
}

export default AxiosInterceptor;
