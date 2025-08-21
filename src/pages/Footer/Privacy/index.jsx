import SecurityIcon from '@mui/icons-material/Security';

import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';
import PolicyTopCard from '../../../components/Common/Footer/PolicyTopCard';

function Privacy() {
  const title = '개인정보 처리방침';
  const lastUpdated = '2025년 09월 01일'; // TODO: 날짜 수정 필요함

  return (
    <PolicyLayout
      title={title}
      titleIcon={<SecurityIcon color="primary" />}
      lastUpdated={lastUpdated}
    >
      <PolicyTopCard
        title={title}
        description={
          <span>
            <strong>Linkty</strong>는「개인정보보호법」제30조에 따라 정보주체의
            개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
            있도록 하기 위하여 다음과 같이 {title}을 수립·공개합니다.
          </span>
        }
      />
    </PolicyLayout>
  );
}

export default Privacy;
