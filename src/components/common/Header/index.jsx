import React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Button from '../Button';

import Logo from './Logo';
import { HeaderWrapper, ButtonWrapper } from './styled';

function Header() {
  return (
    <HeaderWrapper component="header">
      {/* Header Logo. */}
      <Logo />

      <ButtonWrapper>
        {/* Login Button. */}
        <Button variant="outlined" color="primary" startIcon={<LoginIcon />}>
          로그인
        </Button>

        {/* Register Button. */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<PersonAddIcon />}
        >
          회원가입
        </Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
}

export default Header;
