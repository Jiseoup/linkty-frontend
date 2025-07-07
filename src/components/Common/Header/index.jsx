import React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Button from '../Button';

import Logo from './Logo';
import { HeaderWrapper, ButtonWrapper } from './styled';

// Common Header Component.
function Header() {
  return (
    <HeaderWrapper component="header">
      {/* Header Logo. */}
      <Logo />

      <ButtonWrapper>
        {/* Login Button. */}
        <Button
          text="로그인"
          variant="outlined"
          color="primary"
          startIcon={<LoginIcon />}
        />

        {/* Register Button. */}
        <Button
          text="회원가입"
          variant="contained"
          color="primary"
          startIcon={<PersonAddIcon />}
        />
      </ButtonWrapper>
    </HeaderWrapper>
  );
}

export default Header;
