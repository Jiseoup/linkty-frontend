import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Button from '../../components/Common/Button';
import Card from '../../components/Common/Card';
import CardHeader from '../../components/Common/CardHeader';
import FormBox from '../../components/Common/FormBox';
import PasswordForm from '../../components/Common/PasswordForm';
import { useAlertContext } from '../../contexts/AlertContext';
import { parseErrorMessage } from '../../exceptions/errorParser';
import {
  getValidateResetPassword,
  postResetPassword,
} from '../../services/user';
import ResetPasswordExpired from '../Error/ResetPasswordExpired';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const { alertSuccess, alertError } = useAlertContext();

  const [valid, setValid] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const onPasswordChange = (e) => setPassword(e.target.value);
  const onPasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

  // Validate reset password token on page load.
  useEffect(() => {
    const validate = async () => {
      try {
        await getValidateResetPassword({ token });
        setValid(true);
      } catch (error) {
        setValid(false);
      }
    };
    validate();
  }, [token]);

  // Don't render anything until validation finishes.
  if (valid === null) return null;

  // If token is invalid or expired, return error page.
  if (valid === false) return <ResetPasswordExpired />;

  // Reset Password Button Click Handler.
  const onResetPasswordButtonClick = async (e) => {
    e.preventDefault();

    // Check if password and passwordConfirm exist, and validate that they match.
    if (!password || !passwordConfirm || password !== passwordConfirm) {
      alertError({
        title: '비밀번호가 일치하지 않습니다.',
        message: '비밀번호를 다시 확인해 주세요.',
      });
      return;
    }

    try {
      await postResetPassword({ token, password });
      alertSuccess({
        title: '성공적으로 비밀번호가 변경되었습니다.',
        message: '이제 새로운 비밀번호로 로그인하실 수 있습니다.',
        onClose: () => navigate('/login'),
      });
    } catch (error) {
      alertError({
        title: '비밀번호 변경에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <Card>
      {/* Reset Password Card Header Component. */}
      <CardHeader
        title="비밀번호 재설정"
        message={
          <>
            새로운 비밀번호를 입력해주세요.
            <br />
            비밀번호 변경 후 다시 로그인하실 수 있습니다.
          </>
        }
      />

      <FormBox onSubmit={onResetPasswordButtonClick}>
        {/* Password Form Component. */}
        <PasswordForm
          password={password}
          passwordLabel="새 비밀번호"
          passwordPlaceholder="새 비밀번호를 입력해주세요."
          passwordConfirm={passwordConfirm}
          passwordConfirmLabel="새 비밀번호 확인"
          passwordConfirmPlaceholder="새 비밀번호를 한 번 더 입력해주세요."
          onPasswordChange={onPasswordChange}
          onPasswordConfirmChange={onPasswordConfirmChange}
        />

        {/* Reset Password Button Component. */}
        <Button
          text="비밀번호 변경"
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ height: '44px', fontSize: '16px', mt: 3 }}
        />
      </FormBox>
    </Card>
  );
}

export default ResetPassword;
