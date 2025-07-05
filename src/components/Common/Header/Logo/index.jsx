import React from 'react';

import { useNavigate } from 'react-router-dom';

import TitleLogo from '../../../../assets/title_logo.svg';

import { LogoWrapper } from './styled';

function Logo() {
  const navigate = useNavigate();

  // Logo onClick Handler.
  const onClick = () => {
    navigate('/');
  };

  return (
    <LogoWrapper onClick={onClick}>
      <img src={TitleLogo} alt="Linkty Logo" style={{ height: 32 }} />
    </LogoWrapper>
  );
}

export default Logo;
