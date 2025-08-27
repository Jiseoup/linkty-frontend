import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import RowBox from '../RowBox';
import TextField from '../TextField';

// Component for password input and validation.
function PasswordForm({
  password,
  passwordLabel,
  passwordPlaceholder,
  passwordConfirm,
  passwordConfirmLabel,
  passwordConfirmPlaceholder,
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
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          value={password}
          onChange={onPasswordChange}
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
          label={passwordConfirmLabel}
          placeholder={passwordConfirmPlaceholder}
          value={passwordConfirm}
          onChange={onPasswordConfirmChange}
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
