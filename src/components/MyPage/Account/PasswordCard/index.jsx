import SecurityIcon from '@mui/icons-material/Security';

import Button from '../../../Common/Button';
import PasswordForm from '../../../Common/PasswordForm';
import RowBox from '../../../Common/RowBox';
import TextField from '../../../Common/TextField';
import ContentCard from '../ContentCard';

function PasswordCard({
  password,
  newPassword,
  newPasswordConfirm,
  onPasswordChange,
  onNewPasswordChange,
  onNewPasswordConfirmChange,
}) {
  return (
    <ContentCard title="비밀번호 변경" icon={<SecurityIcon />}>
      {/* Current password contents. */}
      <RowBox>
        <TextField
          type="password"
          name="password"
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력해주세요."
          // TODO: value랑 onChange 필요할까?
          value={password}
          onChange={onPasswordChange}
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

      {/* TODO: Disable 조건 넣기 - 모두 입력되고 비밀번호 일치할 때 클릭 가능 */}
      {/* Change password button. */}
      <Button
        text="비밀번호 변경"
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      />
    </ContentCard>
  );
}

export default PasswordCard;
