import React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';

import TitleLogo from '../../../assets/title_logo.svg';

import {
  HeaderWrapper,
  HeaderInner,
  LogoWrapper,
  UserButtonWrapper,
  UserButton,
} from './styled';

function Header() {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper component="header">
      <HeaderInner>
        {/* Title Logo. */}
        <LogoWrapper onClick={onLogoClick}>
          <img src={TitleLogo} alt="Linkty Title Logo" style={{ height: 32 }} />
        </LogoWrapper>

        <UserButtonWrapper>
          {/* Login Button. */}
          <UserButton
            variant="outlined"
            color="primary"
            startIcon={<LoginIcon />}
          >
            로그인
          </UserButton>

          {/* Register Button. */}
          <UserButton
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
          >
            회원가입
          </UserButton>
        </UserButtonWrapper>
      </HeaderInner>
    </HeaderWrapper>
  );
}

export default Header;
