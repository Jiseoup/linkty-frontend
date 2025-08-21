import SecurityIcon from '@mui/icons-material/Security';

import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';

function Privacy() {
  // TODO: 날짜 수정 필요함
  const lastUpdated = '2025년 09월 01일';

  return (
    <PolicyLayout
      title="개인정보 처리방침"
      titleIcon={<SecurityIcon color="primary" />}
      lastUpdated={lastUpdated}
    ></PolicyLayout>
  );
}

export default Privacy;
