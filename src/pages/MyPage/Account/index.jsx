import { useState } from 'react';

import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SettingsIcon from '@mui/icons-material/Settings';

import AccountContentBox from '../../../components/MyPage/Account/AccountContentBox';
import InfoCard from '../../../components/MyPage/Account/InfoCard';
import PasswordCard from '../../../components/MyPage/Account/PasswordCard';
import WithdrawButton from '../../../components/MyPage/Account/WithdrawButton';
import Content from '../../../components/MyPage/Content';
import ContentBox from '../../../components/MyPage/ContentBox';

function Account() {
  const [password, setPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);

  const onPasswordChange = (e) => setPassword(e.target.value);
  const onNewPasswordChange = (e) => setNewPassword(e.target.value);
  const onNewPasswordConfirmChange = (e) =>
    setNewPasswordConfirm(e.target.value);

  return (
    <ContentBox>
      <Content
        title="계정 설정"
        titleIcon={<SettingsIcon sx={{ fontSize: 32 }} />}
      >
        <AccountContentBox>
          {/* Account Informations Component. */}
          <InfoCard />

          {/* Change Password Component. */}
          <PasswordCard
            password={password}
            newPassword={newPassword}
            newPasswordConfirm={newPasswordConfirm}
            onPasswordChange={onPasswordChange}
            onNewPasswordChange={onNewPasswordChange}
            onNewPasswordConfirmChange={onNewPasswordConfirmChange}
          />
        </AccountContentBox>

        {/* Account Withdrawal Button Component. */}
        <WithdrawButton
          text="회원 탈퇴"
          variant="contained"
          color="error"
          startIcon={<PersonRemoveIcon />}
        />
      </Content>
    </ContentBox>
  );
}

export default Account;
