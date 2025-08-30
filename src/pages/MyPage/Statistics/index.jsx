import BarChartIcon from '@mui/icons-material/BarChart';

import Content from '../../../components/MyPage/Content';
import ContentBox from '../../../components/MyPage/ContentBox';

function Statistics() {
  return (
    <ContentBox>
      <Content
        title="URL 통계"
        titleIcon={<BarChartIcon sx={{ fontSize: 32 }} />}
      >
        내용
      </Content>
    </ContentBox>
  );
}

export default Statistics;
