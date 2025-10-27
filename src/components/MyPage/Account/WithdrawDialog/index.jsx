import { useState } from 'react';

import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Checkbox, FormControlLabel } from '@mui/material';

import Dialog from '../../../Common/Dialog';

import {
  HeaderAlert,
  MessageBox,
  MainMessage,
  SubMessage,
  BodyAlert,
  BodyAlertTitle,
  ListBox,
  ListItem,
  PasswordInput,
  ActionButtonGroup,
  ActionButton,
} from './styled';

function WithdrawDialog({ isOpen, onClose }) {
  const [password, setPassword] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const onPasswordChange = (e) => setPassword(e.target.value);
  const onConfirmChange = (e) => setIsConfirmed(e.target.checked);

  const isValid = password && isConfirmed;

  const onWithdrawButtonClick = () => {
    // TODO: 회원 탈퇴 로직 추가
    console.log('회원 탈퇴 처리');
  };

  // Reset state when dialog closes.
  const resetAndClose = () => {
    setPassword(null);
    setIsConfirmed(false);
    onClose();
  };

  return (
    <Dialog
      title="회원 탈퇴"
      titleColor="error"
      icon={<PersonRemoveIcon fontSize="medium" color="error" />}
      isOpen={isOpen}
      onClose={resetAndClose}
      showFooter={false}
    >
      {/* Header alert message. */}
      <HeaderAlert severity="error">
        회원 탈퇴 시 모든 데이터가 영구 삭제되며 복구할 수 없습니다.
      </HeaderAlert>

      {/* Body message contents. */}
      <MessageBox>
        <MainMessage>정말로 회원 탈퇴를 진행하시겠습니까?</MainMessage>
        <SubMessage>
          탈퇴하시기 전에 아래 내용을 반드시 확인해 주세요.
        </SubMessage>
      </MessageBox>

      {/* Boby alert contents. */}
      <BodyAlert severity="warning">
        {/* Alert title. */}
        <BodyAlertTitle>탈퇴 시 삭제되는 정보</BodyAlertTitle>

        {/* Alert list contents. */}
        <ListBox component="ul">
          {/* TODO: 내용 변경 필요할 수 있음 */}
          <ListItem>회원 계정으로 생성한 모든 단축 URL 및 통계 데이터</ListItem>
          <ListItem>계정 정보 및 서비스 이용 기록</ListItem>
        </ListBox>
      </BodyAlert>

      {/* Password input. */}
      <PasswordInput
        type="password"
        name="password"
        label="비밀번호 확인"
        placeholder="현재 비밀번호를 입력해주세요."
        value={password}
        onChange={onPasswordChange}
      />

      {/* Confirmation checkbox. */}
      <FormControlLabel
        label="위 내용을 확인했으며, 회원 탈퇴에 동의합니다."
        control={
          <Checkbox
            color="error"
            checked={isConfirmed}
            onChange={onConfirmChange}
          />
        }
      />

      {/* Action buttons. */}
      <ActionButtonGroup>
        <ActionButton
          text="취소"
          variant="outlined"
          color="error"
          onClick={resetAndClose}
          fullWidth
        />
        <ActionButton
          text="회원 탈퇴"
          variant="contained"
          color="error"
          onClick={onWithdrawButtonClick}
          disabled={!isValid}
          fullWidth
        />
      </ActionButtonGroup>
    </Dialog>
  );
}

export default WithdrawDialog;
