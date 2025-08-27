import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/Common/Button';
import Card from '../../components/Common/Card';
import CardHeader from '../../components/Common/CardHeader';
import FormBox from '../../components/Common/FormBox';
import PasswordForm from '../../components/Common/PasswordForm';
import Captcha from '../../components/Register/Captcha';
import EmailForm from '../../components/Register/EmailForm';
import { useAlertContext } from '../../contexts/AlertContext';
import { parseErrorMessage } from '../../exceptions/errorParser';
import {
  postVerificationEmail,
  postVerificationConfirm,
} from '../../services/email';
import { postRegister } from '../../services/user';

function Register() {
  const navigate = useNavigate();

  const { alertSuccess, alertError } = useAlertContext();

  const [email, setEmail] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [code, setCode] = useState(null);
  const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  // All register fields onChange Handler.
  const onEmailChange = (e) => setEmail(e.target.value);
  const onCodeChange = (e) => setCode(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onPasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

  // Send Verification Code Button Click Handler.
  const onVerifyButtonClick = async () => {
    try {
      await postVerificationEmail({ email });
      setIsEmailSent(true);
      alertSuccess({
        title: '인증번호가 발송되었습니다.',
        message:
          `${email} 메일함을 확인해주세요.` +
          '\n메일이 오지 않으면 스팸함을 확인하거나, 재발송을 시도해 주세요.',
      });
    } catch (error) {
      alertError({
        title: '인증번호 발송에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  // Confirm Verification Code Button Click Handler.
  const onConfirmButtonClick = async () => {
    try {
      await postVerificationConfirm({ email, code });
      setIsCodeConfirmed(true);
      alertSuccess({
        title: '이메일 인증이 완료되었습니다.',
        message: '회원가입을 이어서 진행해 주세요.',
      });
    } catch (error) {
      alertError({
        title: '이메일 인증에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  // Register Button Click Handler.
  const onRegisterButtonClick = async (e) => {
    e.preventDefault();

    // Check if email is sent and code is confirmed.
    if (!isEmailSent || !isCodeConfirmed) {
      alertError({
        title: '이메일 인증이 완료되지 않았습니다.',
        message: '이메일 인증을 완료해 주세요.',
      });
      return;
    }

    // Check if password and passwordConfirm exist, and validate that they match.
    if (!password || !passwordConfirm || password !== passwordConfirm) {
      alertError({
        title: '비밀번호가 일치하지 않습니다.',
        message: '비밀번호를 다시 확인해 주세요.',
      });
      return;
    }

    // Check if captcha verification has been completed.
    if (!captchaValue) {
      alertError({
        title: '로봇이 아님을 확인해 주세요.',
        message: '회원가입을 완료하려면 reCAPTCHA 인증을 진행해 주세요.',
      });
      return;
    }

    try {
      await postRegister({
        email: email,
        password: password,
        captchaToken: captchaValue,
      });
      alertSuccess({
        title: '회원가입을 진심으로 환영합니다!',
        message: '로그인하여 Linkty의 모든 서비스를 자유롭게 이용해보세요.',
        onClose: () => navigate('/login'),
      });
    } catch (error) {
      alertError({
        title: '회원가입에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <Card>
      {/* Register Card Header Component. */}
      <CardHeader
        title="회원가입"
        // TODO: 메시지 변경 필요할수도
        message={
          <>
            Linkty에 오신 것을 진심으로 환영합니다.
            <br />
            지금 회원가입하고, Linkty의 다양한 기능을 무료로 이용해보세요.
          </>
        }
      />

      <FormBox onSubmit={onRegisterButtonClick}>
        {/* Email Form Component. */}
        <EmailForm
          email={email}
          code={code}
          onEmailChange={onEmailChange}
          onCodeChange={onCodeChange}
          isEmailSent={isEmailSent}
          isCodeConfirmed={isCodeConfirmed}
          onVerifyButtonClick={onVerifyButtonClick}
          onConfirmButtonClick={onConfirmButtonClick}
        />

        {/* Password Form Component. */}
        <PasswordForm
          password={password}
          passwordLabel="비밀번호"
          passwordPlaceholder="비밀번호를 입력해주세요."
          passwordConfirm={passwordConfirm}
          passwordConfirmLabel="비밀번호 확인"
          passwordConfirmPlaceholder="비밀번호를 한 번 더 입력해주세요."
          onPasswordChange={onPasswordChange}
          onPasswordConfirmChange={onPasswordConfirmChange}
        />

        {/* Captcha Component. */}
        <Captcha setCaptchaValue={setCaptchaValue} />

        {/* Register Button Component. */}
        <Button
          text="회원가입"
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ height: '44px', fontSize: '16px' }}
        />
      </FormBox>
    </Card>
  );
}

export default Register;
