import React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import CommonButton from '../CommonButton';

import Logo from './Logo';
import { HeaderWrapper, ButtonWrapper } from './styled';

function Header() {
  return (
    <HeaderWrapper component="header">
      {/* Linkty Logo. */}
      <Logo />

      <ButtonWrapper>
        {/* Login Button. */}
        <CommonButton
          variant="outlined"
          color="primary"
          startIcon={<LoginIcon />}
        >
          로그인
        </CommonButton>

        {/* Register Button. */}
        <CommonButton
          variant="contained"
          color="primary"
          startIcon={<PersonAddIcon />}
        >
          회원가입
        </CommonButton>
      </ButtonWrapper>
    </HeaderWrapper>
  );
}

export default Header;
