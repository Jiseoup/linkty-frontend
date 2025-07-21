import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { LogoWrapper } from './styled';

function Logo() {
  const location = useLocation();
  const navigate = useNavigate();

  // Logo image click handler.
  const onLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <LogoWrapper onClick={onLogoClick}>
      <img src="/title_logo.png" alt="Linkty Logo" style={{ height: 32 }} />
    </LogoWrapper>
  );
}

export default Logo;
