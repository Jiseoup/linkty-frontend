import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/Common/Button';
import Card from '../../components/Common/Card';
import FormBox from '../../components/Common/FormBox';
import Captcha from '../../components/Register/Captcha';
import EmailForm from '../../components/Register/EmailForm';
import PasswordForm from '../../components/Register/PasswordForm';
import { useAlertContext } from '../../contexts/AlertContext';
import { parseErrorMessage } from '../../exceptions/errorParser';
import {
  postVerification,
  postVerificationConfirm,
} from '../../services/email';
import { postRegister } from '../../services/user';

function Register() {
  const navigate = useNavigate();

  const { showSuccess, showError } = useAlertContext();

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
      await postVerification({ email });
      setIsEmailSent(true);
      showSuccess({
        title: '인증번호가 발송되었습니다.',
        message:
          `${email} 메일함을 확인해주세요.` +
          '\n메일이 오지 않으면 스팸함을 확인하거나, 재발송을 시도해 주세요.',
      });
    } catch (error) {
      showError({
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
      showSuccess({
        title: '이메일 인증이 완료되었습니다.',
        message: '회원가입을 이어서 진행해 주세요.',
      });
    } catch (error) {
      showError({
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
      showError({
        title: '이메일 인증이 완료되지 않았습니다.',
        message: '이메일 인증을 완료해 주세요.',
      });
      return;
    }

    // Check if password and passwordConfirm are the same.
    if (password !== passwordConfirm) {
      showError({
        title: '비밀번호가 일치하지 않습니다.',
        message: '비밀번호를 다시 확인해 주세요.',
      });
      return;
    }

    // Check if captcha verification has been completed.
    if (!captchaValue) {
      showError({
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
      showSuccess({
        title: '회원가입을 진심으로 환영합니다!',
        message: '로그인 후 Linkty의 모든 서비스를 자유롭게 이용해보세요.',
        onClose: () => navigate('/'),
      });
    } catch (error) {
      showError({
        title: '회원가입에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <>
      <Card>
        <FormBox onSubmit={onRegisterButtonClick}>
          <h2 style={{ marginBottom: '0px' }}>회원가입</h2>

          <p style={{ marginBottom: '36px' }}>Linkty에 오신것을 환영합니다!</p>

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
            passwordConfirm={passwordConfirm}
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
    </>
  );
}

export default Register;
