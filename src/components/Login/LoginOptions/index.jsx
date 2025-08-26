import { Checkbox } from '@mui/material';

import { LoginOptionsBox, StyledFormControlLabel, StyledLink } from './styled';

function LoginOptions({ rememberMe, onRememberMeChange }) {
  return (
    <LoginOptionsBox>
      {/* Remember Me Checkbox Component. */}
      <StyledFormControlLabel
        label="로그인 상태 유지"
        control={
          <Checkbox
            size="small"
            checked={rememberMe}
            onChange={onRememberMeChange}
          />
        }
      />

      {/* Find Password Link Component. */}
      <StyledLink href="/find-password" underline="always">
        비밀번호 찾기
      </StyledLink>
    </LoginOptionsBox>
  );
}

export default LoginOptions;
