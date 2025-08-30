import LinkIcon from '@mui/icons-material/Link';

import Content from '../../../components/MyPage/Content';
import ContentBox from '../../../components/MyPage/ContentBox';

function Urls() {
  return (
    <ContentBox>
      <Content title="URL 관리" titleIcon={<LinkIcon sx={{ fontSize: 32 }} />}>
        내용
      </Content>
    </ContentBox>
  );
}

export default Urls;
