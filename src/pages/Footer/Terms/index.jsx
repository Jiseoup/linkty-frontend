import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';

function Terms() {
  // TODO: 날짜 수정 필요함
  const lastUpdated = '2025년 09월 01일';

  return (
    <PolicyLayout
      title="서비스 이용약관"
      titleIcon={<LibraryBooksIcon color="primary" />}
      lastUpdated={lastUpdated}
    ></PolicyLayout>
  );
}

export default Terms;
