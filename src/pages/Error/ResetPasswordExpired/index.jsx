import { useNavigate } from 'react-router-dom';

import ButtonGroup from '../../../components/Error/ButtonGroup';
import ErrorCard from '../../../components/Error/ErrorCard';
import Message from '../../../components/Error/Message';
import Title from '../../../components/Error/Title';

function ResetPasswordExpired() {
  const navigate = useNavigate();

  // Find password button click handler.
  const onFindPasswordClick = () => {
    navigate('/find-password');
  };

  return (
    <ErrorCard>
      {/* Title Logo and Message Component. */}
      <Title message={'404 NOT FOUND'} />

      {/* Error Message Component. */}
      <Message
        title={'비밀번호 재설정 페이지를 찾을 수 없습니다.'}
        message={
          <>
            요청하신 페이지가 만료되었거나, 존재하지 않습니다.
            <br />
            비밀번호 찾기를 다시 시도해 주세요.
          </>
        }
      />

      {/* Navigate Button Group Component. */}
      <ButtonGroup
        customText="비밀번호 찾기"
        customOnClick={onFindPasswordClick}
      />
    </ErrorCard>
  );
}

export default ResetPasswordExpired;
