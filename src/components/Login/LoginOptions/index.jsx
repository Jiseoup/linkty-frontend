import { Checkbox, FormControlLabel } from '@mui/material';

import { LoginOptionsBox, StyledLink } from './styled';

function LoginOptions() {
  return (
    <>
      <LoginOptionsBox>
        {/* TODO: 로그인 상태 유지 구현 필요 */}
        {/* Stay Logged-In Checkbox Component. */}
        <FormControlLabel
          label="로그인 상태 유지"
          control={<Checkbox size="small" />}
          sx={{ ml: -1 }}
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
