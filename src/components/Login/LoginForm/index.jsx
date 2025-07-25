import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

// Component for email input and password input.
function LoginForm({ email, password, onEmailChange, onPasswordChange }) {
  return (
    <>
      {/* Email Input TextField. */}
      <RowBox>
        <TextField
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onEmailChange}
          required
          autoFocus
        />
      </RowBox>

      {/* Password Input TextField. */}
      <RowBox>
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
    </>
  );
}

export default LoginForm;
