import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

// Component for password input and validation.
function PasswordForm({
  password,
  passwordConfirm,
  onPasswordChange,
  onPasswordConfirmChange,
}) {
  const passwordMatch = password === passwordConfirm;
  const showPasswordMatchMessage = !!password && !!passwordConfirm;

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
          onChange={onPasswordChange}
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
          onChange={onPasswordConfirmChange}
          required
          error={!passwordMatch && showPasswordMatchMessage}
          helperText={
            !passwordMatch && showPasswordMatchMessage
              ? '비밀번호가 일치하지 않습니다.'
              : null
          }
          InputProps={{
            endAdornment: showPasswordMatchMessage ? (
              passwordMatch ? (
                <CheckIcon style={{ color: 'green' }} />
              ) : (
                <CloseIcon style={{ color: 'red' }} />
              )
            ) : null,
          }}
        />
      </RowBox>
    </>
  );
}

export default PasswordForm;
