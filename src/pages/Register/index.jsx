import React, { useState } from 'react';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Button from '../../components/Common/Button';
import Card from '../../components/Common/Card';
import Footer from '../../components/Common/Footer';
import FormBox from '../../components/Common/FormBox';
import Header from '../../components/Common/Header';
import EmailForm from '../../components/Register/EmailForm';
import PasswordForm from '../../components/Register/PasswordForm';
import {
  postVerification,
  postVerificationConfirm,
} from '../../services/email';
import { postRegister } from '../../services/user';

function Register() {
  const [email, setEmail] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [code, setCode] = useState(null);
  const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

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
      alert('인증번호가 발송되었습니다.');
    } catch (error) {
      // TODO: Should add Error Handling.
      alert(
        '인증번호 발송 실패: ' +
          (error.response?.data?.message || error.message)
      );
    }
  };

  // Confirm Verification Code Button Click Handler.
  const onConfirmButtonClick = async () => {
    try {
      await postVerificationConfirm({ email, code });
      setIsCodeConfirmed(true);
      alert('인증이 완료되었습니다.');
    } catch (error) {
      // TODO: Should add Error Handling.
      alert('인증 실패: ' + (error.response?.data?.message || error.message));
    }
  };

  // Register Button Click Handler.
  const onRegisterButtonClick = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await postRegister({
        email: email,
        password: password,
      });
      alert('회원가입 성공!');
    } catch (error) {
      // TODO: Should add Error Handling.
      alert(
        '회원가입 실패: ' + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      {/* Register Page Header. */}
      <Header />

      <BackgroundWrapper>
        <Card>
          <FormBox onSubmit={onRegisterButtonClick}>
            <h2 style={{ marginBottom: '36px' }}>회원가입</h2>

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

            <PasswordForm
              password={password}
              passwordConfirm={passwordConfirm}
              onPasswordChange={onPasswordChange}
              onPasswordConfirmChange={onPasswordConfirmChange}
            />

            <Button
              text="회원가입"
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            />
          </FormBox>
        </Card>

        {/* Register Page Footer. */}
        <Footer />
      </BackgroundWrapper>
    </>
  );
}

export default Register;
