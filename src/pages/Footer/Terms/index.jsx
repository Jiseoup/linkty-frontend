import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';
import PolicyTopCard from '../../../components/Common/Footer/PolicyTopCard';

function Terms() {
  const title = '서비스 이용약관';
  const lastUpdated = '2025년 09월 01일'; // TODO: 날짜 수정 필요함

  return (
    <PolicyLayout
      title={title}
      titleIcon={<LibraryBooksIcon color="primary" />}
      lastUpdated={lastUpdated}
    >
      <PolicyTopCard title={title} description={<span>내용 추가</span>} />
    </PolicyLayout>
  );
}

export default Terms;
