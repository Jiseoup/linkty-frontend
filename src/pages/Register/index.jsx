import React, { useState } from 'react';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Card from '../../components/Common/Card';
import Footer from '../../components/Common/Footer';
import FormBox from '../../components/Common/FormBox';
import Header from '../../components/Common/Header';
import EmailForm from '../../components/Register/EmailForm';
import PasswordForm from '../../components/Register/PasswordForm';

function Register() {
  const [registerForm, setRegisterForm] = useState({
    email: null,
    password: null,
    passwordConfirm: null,
  });

  // Register Form Change Handler.
  const onRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const onRegisterButtonClick = (e) => {
    e.preventDefault();
    // TODO: API Connection.
    alert('회원가입 기능 구현중 ...');
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
              email={registerForm.email}
              onChange={onRegisterFormChange}
            />

            <PasswordForm
              password={registerForm.password}
              passwordConfirm={registerForm.passwordConfirm}
              onChange={onRegisterFormChange}
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
