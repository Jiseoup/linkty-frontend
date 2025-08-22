import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import PolicyContent from '../../../components/Common/Footer/PolicyContent';
import PolicyDescription from '../../../components/Common/Footer/PolicyDescription';
import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';

import { sections } from './sections';

function Terms() {
  const title = '서비스 이용약관';
  const lastUpdated = '2025년 09월 01일'; // TODO: 날짜 수정 필요함

  return (
    <PolicyLayout
      title={title}
      titleIcon={<LibraryBooksIcon color="primary" />}
      lastUpdated={lastUpdated}
    >
      <PolicyDescription
        title={title}
        // TODO: 내용 변경 필요
        description={
          <span>
            <strong>Linkty</strong> 서비스를 이용해 주셔서 감사합니다. 본 약관은
            Linkty 서비스 제공 및 이용과 관련하여 회사와 회원 간의 권리, 의무 및
            책임사항을 규정합니다. 서비스를 이용하시기 전에 본 약관을 주의 깊게
            읽어보시기 바랍니다.
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
    </PolicyLayout>
  );
}

export default Terms;
