import React from 'react';

import { useNavigate } from 'react-router-dom';

import TitleLogo from '../../../../assets/title_logo.png';

import { LogoWrapper } from './styled';

function Logo() {
  const navigate = useNavigate();

  // Logo image click handler.
  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <LogoWrapper onClick={onLogoClick}>
      <img src={TitleLogo} alt="Linkty Logo" style={{ height: 32 }} />
    </LogoWrapper>
  );
}

export default Logo;
