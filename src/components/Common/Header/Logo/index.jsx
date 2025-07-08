import React from 'react';

import { useNavigate } from 'react-router-dom';

import { LogoWrapper } from './styled';

function Logo() {
  const navigate = useNavigate();

  // Logo image click handler.
  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <LogoWrapper onClick={onLogoClick}>
      <img src="/title_logo.png" alt="Linkty Logo" style={{ height: 32 }} />
    </LogoWrapper>
  );
}

export default Logo;
