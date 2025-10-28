import { useState } from 'react';

import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SettingsIcon from '@mui/icons-material/Settings';

import AccountContentBox from '../../../components/MyPage/Account/AccountContentBox';
import InfoCard from '../../../components/MyPage/Account/InfoCard';
import PasswordCard from '../../../components/MyPage/Account/PasswordCard';
import WithdrawButton from '../../../components/MyPage/Account/WithdrawButton';
import WithdrawDialog from '../../../components/MyPage/Account/WithdrawDialog';
import Content from '../../../components/MyPage/Content';
import ContentBox from '../../../components/MyPage/ContentBox';

function Account() {
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);

  // Withdraw button click handler.
  const onWithdrawDialogClick = () => {
    setIsWithdrawDialogOpen(true);
  };

  // Withdraw button close handler.
  const onWithdrawDialogClose = () => {
    setIsWithdrawDialogOpen(false);
  };

  return (
    <ContentBox>
      <Content
        title="계정 설정"
        titleIcon={<SettingsIcon sx={{ fontSize: 32 }} />}
      >
        {/* Account Content Box Component. */}
        <AccountContentBox>
          {/* Account Informations Component. */}
          <InfoCard />

          {/* Change Password Component. */}
          <PasswordCard />
        </AccountContentBox>

        {/* Account Withdrawal Button Component. */}
        <WithdrawButton
          text="회원 탈퇴"
          variant="contained"
          color="error"
          startIcon={<PersonRemoveIcon />}
          onClick={onWithdrawDialogClick}
        />
      </Content>

      {/* Withdraw Dialog Component. */}
      <WithdrawDialog
        isOpen={isWithdrawDialogOpen}
        onClose={onWithdrawDialogClose}
      />
    </ContentBox>
  );
}

export default Account;
