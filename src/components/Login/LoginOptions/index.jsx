import { Checkbox } from '@mui/material';

import { LoginOptionsBox, StyledFormControlLabel, StyledLink } from './styled';

function LoginOptions() {
  return (
    <>
      <LoginOptionsBox>
        {/* TODO: 로그인 상태 유지 구현 필요 */}
        {/* Stay Logged-In Checkbox Component. */}
        <StyledFormControlLabel
          label="로그인 상태 유지"
          control={<Checkbox size="small" />}
        />

        {/* TODO: 비밀번호 찾기 구현 필요 */}
        {/* Find Password Link Component. */}
        <StyledLink href="/find-password" underline="always">
          비밀번호 찾기
        </StyledLink>
      </LoginOptionsBox>
    </>
  );
}

export default LoginOptions;
