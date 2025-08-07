import ButtonGroup from '../../../components/Error/ButtonGroup';
import ErrorCard from '../../../components/Error/ErrorCard';
import Message from '../../../components/Error/Message';
import Title from '../../../components/Error/Title';

function NotFound() {
  return (
    <ErrorCard>
      {/* Title Logo and Message Component. */}
      <Title message={'404 NOT FOUND'} />

      {/* Error Message Component. */}
      <Message
        title={'요청하신 페이지를 찾을 수 없습니다.'}
        message={
          <>
            주소가 잘못 입력되었거나, 페이지가 변경 또는 삭제되었을 수 있습니다.
            <br />
            올바른 주소를 입력하였는지 다시 한번 확인해주세요.
          </>
        }
      />

      {/* Navigate Button Group Component. */}
      <ButtonGroup />
    </ErrorCard>
  );
}

export default NotFound;
