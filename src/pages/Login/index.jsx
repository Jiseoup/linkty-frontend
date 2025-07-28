import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/Common/Button';
import Card from '../../components/Common/Card';
import FormBox from '../../components/Common/FormBox';
import LoginForm from '../../components/Login/LoginForm';
import LoginOptions from '../../components/Login/LoginOptions';
import { useAccessTokenContext } from '../../contexts/AccessTokenContext';
import { useAlertContext } from '../../contexts/AlertContext';
import { parseErrorMessage } from '../../exceptions/errorParser';
import { postLogin } from '../../services/user';

function Login() {
  const navigate = useNavigate();

  const { showError } = useAlertContext();
  const { setAccessToken } = useAccessTokenContext();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  // Login Button Click Handler.
  const onLoginButtonClick = async (e) => {
    e.preventDefault();

    try {
      const response = await postLogin({ email, password });
      setAccessToken(response.accessToken);
      localStorage.setItem('loggedIn', 'true'); // Set loggedIn status in the local storage.
      navigate('/');
    } catch (error) {
      showError({
        title: '로그인에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <>
      <Card>
        <FormBox onSubmit={onLoginButtonClick}>
          <h2 style={{ marginBottom: '36px' }}>로그인</h2>

          {/* Login Form Component. */}
          <LoginForm
            email={email}
            password={password}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
          />

          {/* TODO: 추후 로그인 옵션 기능 구현 필요 */}
          {/* Login Options Component. */}
          <LoginOptions />

          {/* Login Button Component. */}
          <Button
            text="로그인"
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ height: '44px', fontSize: '16px' }}
          />
        </FormBox>
      </Card>
    </>
  );
}

export default Login;
