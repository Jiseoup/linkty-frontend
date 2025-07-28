import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';

import { useAccessTokenContext } from '../../../../contexts/AccessTokenContext';
import { useAlertContext } from '../../../../contexts/AlertContext';
import { useToastContext } from '../../../../contexts/ToastContext';
import { postLogout } from '../../../../services/user';
import Button from '../../Button';

import Logo from './Logo';
import { HeaderWrapper, ButtonWrapper } from './styled';

// Common Header Component.
function Header() {
  const navigate = useNavigate();

  const { alertError } = useAlertContext();
  const { toastSuccess } = useToastContext();
  const { accessToken, clearAccessToken } = useAccessTokenContext();

  // Register button click handler.
  const onRegisterClick = () => {
    navigate('/register');
  };

  // Login button click handler.
  const onLoginClick = () => {
    navigate('/login');
  };

  // Logout button click handler.
  const onLogoutClick = async () => {
    try {
      await postLogout();
      toastSuccess({ message: '성공적으로 로그아웃되었습니다.' });
    } catch (error) {
      alertError({
        title: '로그아웃에 실패했습니다.',
        message:
          '서버 세션이 완전히 종료되지 않았을 수 있습니다.' +
          '\n보안을 위해 다시 로그인한 후 로그아웃을 시도해 주세요.',
      });
    } finally {
      clearAccessToken();
      navigate('/');
    }
  };

  return (
    <HeaderWrapper component="header">
      {/* Header Logo. */}
      <Logo />

      <ButtonWrapper>
        {accessToken ? (
          // Logged in state.
          <>
            {/* Logout Button. */}
            <Button
              text="로그아웃"
              variant="outlined"
              color="primary"
              startIcon={<LogoutIcon />}
              onClick={onLogoutClick}
            />
          </>
        ) : (
          // Logged out state.
          <>
            {/* Login Button. */}
            <Button
              text="로그인"
              variant="outlined"
              color="primary"
              startIcon={<LoginIcon />}
              onClick={onLoginClick}
            />

            {/* Register Button. */}
            <Button
              text="회원가입"
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              onClick={onRegisterClick}
            />
          </>
        )}
      </ButtonWrapper>
    </HeaderWrapper>
  );
}

export default Header;
