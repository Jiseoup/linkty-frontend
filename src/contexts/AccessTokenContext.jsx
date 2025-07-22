import React, { createContext, useContext, useState } from 'react';

const AccessTokenContext = createContext();

// Access Token Context Provider.
export const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  // TODO: Logout API 처리와 함께 사용
  const clearAccessToken = () => setAccessToken(null);

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setAccessToken, clearAccessToken }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessTokenContext = () => useContext(AccessTokenContext);
