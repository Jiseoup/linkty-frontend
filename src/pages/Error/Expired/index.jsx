import ButtonGroup from '../../../components/Error/ButtonGroup';
import ErrorCard from '../../../components/Error/ErrorCard';
import Message from '../../../components/Error/Message';
import Title from '../../../components/Error/Title';

function Expired() {
  return (
    <ErrorCard>
      {/* Title Logo and Message Component. */}
      <Title message={'만료된 링크입니다.'} />

      {/* Error Message Component. */}
      <Message
        message={'이 단축 URL은 설정된 만료일이 지나 접근할 수 없습니다.'}
      />

      {/* Navigate Button Group Component. */}
      <ButtonGroup />
    </ErrorCard>
  );
}

export default Expired;
