import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityIcon from '@mui/icons-material/Security';

import PolicyContact from '../../../components/Common/Footer/PolicyContact';
import PolicyContent from '../../../components/Common/Footer/PolicyContent';
import PolicyDescription from '../../../components/Common/Footer/PolicyDescription';
import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';

import { sections } from './sections';

function Privacy() {
  const title = '개인정보 처리방침';
  const lastUpdated = '2025년 09월 01일'; // TODO: 날짜 수정 필요함

  return (
    <PolicyLayout
      title={title}
      titleIcon={<SecurityIcon color="primary" />}
      lastUpdated={lastUpdated}
    >
      {/* Privacy policy description component. */}
      <PolicyDescription
        title={title}
        description={
          <span>
            <strong>Linkty</strong>는「개인정보보호법」제30조에 따라 정보주체의
            개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
            있도록 하기 위하여 다음과 같이 {title}을 수립·공개합니다.
          </span>
        }
      />

      {/* Iterate pre-defined sections and show policy contents. */}
      {sections.map((section, index) => (
        <PolicyContent
          key={index}
          title={section.title}
          titleIcon={section.icon}
          contents={section.contents}
        />
      ))}

      {/* Privacy policy contact info component. */}
      <PolicyContact
        title="개인정보 보호 문의"
        titleIcon={<AdminPanelSettingsIcon sx={{ fontSize: 28 }} />}
        nameLabel="개인정보 보호 책임자 :"
      />
    </PolicyLayout>
  );
}

export default Privacy;
