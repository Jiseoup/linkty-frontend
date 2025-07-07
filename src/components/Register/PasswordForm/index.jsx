import React from 'react';

import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

function PasswordForm({ password, passwordConfirm, onChange }) {
  return (
    <>
      <RowBox>
        {/* Password Input TextField. */}
        <TextField
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onChange}
          required
        />
      </RowBox>

      <RowBox>
        {/* Password Confirm Input TextField. */}
        <TextField
          type="password"
          name="passwordConfirm"
          label="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          value={passwordConfirm}
          onChange={onChange}
          required
        />
      </RowBox>
    </>
  );
}

export default PasswordForm;
