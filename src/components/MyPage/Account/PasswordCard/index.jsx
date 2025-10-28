import { useState } from 'react';

import SecurityIcon from '@mui/icons-material/Security';
import { useNavigate } from 'react-router-dom';

import { useAccessTokenContext } from '../../../../contexts/AccessTokenContext';
import { useAlertContext } from '../../../../contexts/AlertContext';
import { parseErrorMessage } from '../../../../exceptions/errorParser';
import { postChangePassword } from '../../../../services/user';
import Button from '../../../Common/Button';
import PasswordForm from '../../../Common/PasswordForm';
import RowBox from '../../../Common/RowBox';
import TextField from '../../../Common/TextField';
import ContentCard from '../ContentCard';

function PasswordCard() {
  const navigate = useNavigate();

  const { alertSuccess, alertError } = useAlertContext();
  const { clearAccessToken } = useAccessTokenContext();

  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);

  const onCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const onNewPasswordChange = (e) => setNewPassword(e.target.value);
  const onNewPasswordConfirmChange = (e) =>
    setNewPasswordConfirm(e.target.value);

  // Withdraw Button Click Handler.
  const onChangePasswordButtonClick = async (e) => {
    e.preventDefault();

    // Check if newPassword and newPasswordConfirm exist, and validate that they match.
    if (
      !newPassword ||
      !newPasswordConfirm ||
      newPassword !== newPasswordConfirm
    ) {
      alertError({
        title: '새 비밀번호가 일치하지 않습니다.',
        message: '새 비밀번호를 다시 확인해 주세요.',
      });
      return;
    }

    try {
      await postChangePassword({ currentPassword, newPassword });
      clearAccessToken();
      alertSuccess({
        title: '성공적으로 비밀번호가 변경되었습니다.',
        message: '보안을 위해 다시 로그인해 주세요.',
        onClose: () => navigate('/login'),
      });
    } catch (error) {
      alertError({
        title: '비밀번호 변경에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <ContentCard title="비밀번호 변경" icon={<SecurityIcon />}>
      {/* Current password contents. */}
      <RowBox>
        <TextField
          type="password"
          name="password"
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력해주세요."
          value={currentPassword}
          onChange={onCurrentPasswordChange}
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

      {/* Change password button. */}
      <Button
        text="비밀번호 변경"
        variant="contained"
        color="primary"
        onClick={onChangePasswordButtonClick}
        fullWidth
      />
    </ContentCard>
  );
}

export default PasswordCard;
