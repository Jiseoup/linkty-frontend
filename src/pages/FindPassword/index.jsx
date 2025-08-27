import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/Common/Button';
import Card from '../../components/Common/Card';
import CardHeader from '../../components/Common/CardHeader';
import FormBox from '../../components/Common/FormBox';
import RowBox from '../../components/Common/RowBox';
import TextField from '../../components/Common/TextField';
import { useAlertContext } from '../../contexts/AlertContext';
import { parseErrorMessage } from '../../exceptions/errorParser';
import { postResetPasswordEmail } from '../../services/email';

function FindPassword() {
  const navigate = useNavigate();

  const { alertSuccess, alertError } = useAlertContext();

  const [email, setEmail] = useState(null);

  const onEmailChange = (e) => setEmail(e.target.value);

  // Send Reset Password Email Button Click Handler.
  const onSendResetPasswordButtonClick = async (e) => {
    e.preventDefault();

    try {
      await postResetPasswordEmail({ email });
      alertSuccess({
        title: '비밀번호 재설정 링크가 발송되었습니다.',
        message:
          `${email} 메일함을 확인해주세요.` +
          '\n메일이 오지 않으면 스팸함을 확인하거나, 재발송을 시도해 주세요.',
        onClose: () => navigate('/login'),
      });
    } catch (error) {
      alertError({
        title: '비밀번호 재설정 링크 발송에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <Card>
      {/* Find Password Card Header Component. */}
      <CardHeader
        title="비밀번호 찾기"
        message={
          <>
            가입하신 이메일 주소를 입력해 주세요.
            <br />
            비밀번호 재설정 링크를 이메일로 전달해 드립니다.
          </>
        }
      />

      <FormBox onSubmit={onSendResetPasswordButtonClick}>
        {/* Email Input TextField. */}
        <RowBox>
          <TextField
            type="text"
            name="email"
            label="이메일"
            placeholder="가입하신 이메일 주소를 입력해주세요."
            value={email}
            onChange={onEmailChange}
            autoFocus
          />
        </RowBox>

        {/* Send Reset Password Email Button Component. */}
        <Button
          text="비밀번호 재설정"
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ height: '44px', fontSize: '16px', mt: 3 }}
        />
      </FormBox>
    </Card>
  );
}

export default FindPassword;
