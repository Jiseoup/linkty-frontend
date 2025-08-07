import ButtonGroup from '../../../components/Error/ButtonGroup';
import ErrorCard from '../../../components/Error/ErrorCard';
import Message from '../../../components/Error/Message';
import Title from '../../../components/Error/Title';

function NotActivated() {
  return (
    <ErrorCard>
      {/* Title Logo and Message Component. */}
      <Title message={'아직 활성화되지 않은 링크입니다.'} />

      {/* Error Message Component. */}
      <Message
        message={'이 단축 URL은 아직 활성화되지 않아 접근할 수 없습니다.'}
      />

      {/* Navigate Button Group Component. */}
      <ButtonGroup />
    </ErrorCard>
  );
}

export default NotActivated;
