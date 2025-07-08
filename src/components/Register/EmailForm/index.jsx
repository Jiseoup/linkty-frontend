import React from 'react';

import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

import { EmailButton } from './styled';

// Component for email input and validation.
function EmailInput({ email, onEmailChange }) {
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
        />

        {/* Email Validation Button. */}
        <EmailButton
          text="인증번호 발송"
          variant="contained"
          color="primary"
          //   onClick={onSend}
        />
      </RowBox>

      <RowBox>
        {/* Email Validation Code Input TextField. */}
        <TextField
          type="text"
          label="인증번호"
          placeholder="인증번호 6자리를 입력해주세요."
          //   value={code}
          //   onChange={onCodeChange}
          required
          // TODO: 인증번호 발송 버튼 클릭 시로 트리거 변경
          disabled={!email}
        />
      </RowBox>
    </>
  );
}

export default EmailInput;
