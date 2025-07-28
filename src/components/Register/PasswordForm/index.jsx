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
  const isValidPassword =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()]{8,16}$/.test(password);
  const passwordMatch = password === passwordConfirm;
  const showPasswordMatchMessage =
    password && passwordConfirm && isValidPassword;

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
          error={password && !isValidPassword}
          helperText={
            !password
              ? null
              : isValidPassword
                ? '✅ 비밀번호는 최소 1개 이상의 숫자와 영문자를 포함한 8~16자리여야 합니다.'
                : '❌ 비밀번호는 최소 1개 이상의 숫자와 영문자를 포함한 8~16자리여야 합니다.'
          }
          FormHelperTextProps={{
            sx: {
              color: isValidPassword ? 'success.main' : 'error.main',
            },
          }}
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
            !passwordConfirm
              ? null
              : showPasswordMatchMessage
                ? passwordMatch
                  ? '✅ 비밀번호가 일치합니다.'
                  : '❌ 비밀번호가 일치하지 않습니다.'
                : null
          }
          FormHelperTextProps={{
            sx: {
              color: passwordMatch ? 'success.main' : 'error.main',
            },
          }}
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
