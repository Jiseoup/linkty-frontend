import { createContext, useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { postRefreshToken } from '../services/user';

import { useAlertContext } from './AlertContext';

const AccessTokenContext = createContext();

// Access Token Context Provider.
export const AccessTokenProvider = ({ children }) => {
  const navigate = useNavigate();

  const { alertWarning } = useAlertContext();

  const [accessToken, setAccessToken] = useState(null);

  // Clear the stored access token.
  const clearAccessToken = () => {
    setAccessToken(null);
    localStorage.removeItem('loggedIn'); // Remove loggedIn status from the local storage.
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
      value={{ accessToken, setAccessToken, clearAccessToken }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessTokenContext = () => useContext(AccessTokenContext);
