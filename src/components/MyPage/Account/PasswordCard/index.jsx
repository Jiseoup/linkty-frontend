import SecurityIcon from '@mui/icons-material/Security';
import { Alert } from '@mui/material';

import Button from '../../../Common/Button';
import PasswordForm from '../../../Common/PasswordForm';
import RowBox from '../../../Common/RowBox';
import TextField from '../../../Common/TextField';

import { StyledCard, TitleBox, TitleText, CardDivider } from './styled';

function PasswordCard({
  newPassword,
  newPasswordConfirm,
  onNewPasswordChange,
  onNewPasswordConfirmChange,
}) {
  return (
    <StyledCard>
      {/* Title contents. */}
      <TitleBox>
        <SecurityIcon />
        <TitleText>비밀번호 변경</TitleText>
      </TitleBox>

      {/* Card divider. */}
      <CardDivider />

      {/* TODO: Alert 없이 디자인 할지 고민 */}
      {/* Alert contents. */}
      <Alert severity="info" sx={{ mb: 3 }}>
        보안을 위해 정기적으로 비밀번호를 변경해 주세요.
      </Alert>

      {/* Current password contents. */}
      <RowBox>
        <TextField
          type="password"
          name="password"
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력해주세요."
        />
      </RowBox>

      {/* New password contents. */}
      <PasswordForm
        password={newPassword}
        passwordLabel="새 비밀번호"
        passwordPlaceholder="새 비밀번호를 입력해주세요."
        passwordConfirm={newPasswordConfirm}
        passwordConfirmLabel="새 비밀번호 확인"
        passwordConfirmPlaceholder="새 비밀번호를 한 번 더 입력해주세요."
        onPasswordChange={onNewPasswordChange}
        onPasswordConfirmChange={onNewPasswordConfirmChange}
      />

      {/* TODO: 버튼 사이즈 고민 */}
      {/* Change password button. */}
      <Button
        text="비밀번호 변경"
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ height: '40px', fontSize: '14' }}
      />
    </StyledCard>
  );
}

export default PasswordCard;
