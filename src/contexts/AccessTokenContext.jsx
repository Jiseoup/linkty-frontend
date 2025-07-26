import React, { createContext, useContext, useState, useEffect } from 'react';

import { postRefreshToken } from '../services/user';

import { useAlertContext } from './AlertContext';

const AccessTokenContext = createContext();

// Access Token Context Provider.
export const AccessTokenProvider = ({ children }) => {
  const { showError } = useAlertContext();

  const [accessToken, setAccessToken] = useState(null);

  // TODO: Logout API 처리와 함께 사용
  const clearAccessToken = () => setAccessToken(null);

  // Trying to refresh the access token on initial load.
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await postRefreshToken();
        setAccessToken(response.accessToken);
      } catch (error) {
        showError({
          title: '로그인 세션이 만료되었습니다.',
          message:
            '다시 로그인하여 Linkty의 모든 서비스를 이용하실 수 있습니다.',
        });
        clearAccessToken();
      }
    };
    refreshToken();
  }, []);

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setAccessToken, clearAccessToken }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessTokenContext = () => useContext(AccessTokenContext);
