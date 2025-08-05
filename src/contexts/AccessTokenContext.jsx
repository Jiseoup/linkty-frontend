import { createContext, useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { postRefreshToken } from '../services/user';

import { useAlertContext } from './AlertContext';

// Global variable to store access token for use outside components.
let globalAccessToken = null;

// Set the global access token.
export const setGlobalAccessToken = (accessToken) => {
  globalAccessToken = accessToken;
};

// Get the global access token.
export const getGlobalAccessToken = () => ({
  accessToken: globalAccessToken,
});

const AccessTokenContext = createContext();

// Access Token Context Provider.
export const AccessTokenProvider = ({ children }) => {
  const navigate = useNavigate();

  const { alertWarning } = useAlertContext();

  const [accessTokenState, setAccessTokenState] = useState(null);

  // Set the access token.
  const setAccessToken = (accessToken) => {
    // Set the access token state and global variable.
    setAccessTokenState(accessToken);
    setGlobalAccessToken(accessToken);

    // Set loggedIn status in the local storage.
    localStorage.setItem('loggedIn', 'true');
  };

  // Clear the access token.
  const clearAccessToken = () => {
    // Clear the access token state and global variable.
    setAccessTokenState(null);
    setGlobalAccessToken(null);

    // Remove loggedIn status from the local storage.
    localStorage.removeItem('loggedIn');
  };

  // Trying to refresh the access token on initial load.
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await postRefreshToken();
        setAccessToken(response.accessToken);
      } catch (error) {
        alertWarning({
          title: '로그인 세션이 만료되었습니다.',
          message:
            '다시 로그인하여 Linkty의 모든 서비스를 이용하실 수 있습니다.',
          onClose: () => navigate('/login'),
        });
        clearAccessToken();
      }
    };
    // If the user has logged in, call the refreshToken function.
    if (localStorage.getItem('loggedIn') === 'true') refreshToken();
  }, []);

  return (
    <AccessTokenContext.Provider
      value={{
        accessToken: accessTokenState,
        setAccessToken,
        clearAccessToken,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessTokenContext = () => useContext(AccessTokenContext);
