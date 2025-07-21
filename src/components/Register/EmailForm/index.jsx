import React from 'react';

import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

import { VerificationButton, VerificationHelperText } from './styled';

// Component for email input and validation.
function EmailInput({
  email,
  code,
  onEmailChange,
  onCodeChange,
  isEmailSent,
  isCodeConfirmed,
  onVerifyButtonClick,
  onConfirmButtonClick,
}) {
  return (
    <>
      <RowBox>
        {/* Email Input TextField. */}
        <TextField
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onEmailChange}
          required
          disabled={isEmailSent || isCodeConfirmed}
        />

        {/* Send Email Verification Code Button. */}
        <VerificationButton
          text={isEmailSent ? '인증번호 재발송' : '인증번호 발송'}
          variant={isEmailSent ? 'outlined' : 'contained'}
          color="primary"
          onClick={onVerifyButtonClick}
          disabled={isCodeConfirmed}
        />
      </RowBox>

      <RowBox sx={{ mb: 0 }}>
        {/* Email Verification Code Input TextField. */}
        <TextField
          type="text"
          label="인증번호"
          placeholder="인증번호 6자리를 입력해주세요."
          value={code}
          onChange={onCodeChange}
          required
          disabled={!isEmailSent || isCodeConfirmed}
        />

        {/* Confirm Email Verification Code Button. */}
        <VerificationButton
          text="인증번호 확인"
          variant="contained"
          color="primary"
          onClick={onConfirmButtonClick}
          disabled={!isEmailSent || isCodeConfirmed}
        />
      </RowBox>
      <VerificationHelperText>
        {isCodeConfirmed ? '✅ 이메일 인증이 완료되었습니다.' : null}
      </VerificationHelperText>
    </>
  );
}

export default EmailInput;
