import { useState } from 'react';

import LinkIcon from '@mui/icons-material/Link';

import Content from '../../../components/MyPage/Content';
import ContentBox from '../../../components/MyPage/ContentBox';
import ActionBar from '../../../components/MyPage/Urls/ActionBar';

function Urls() {
  const [searchValue, setSearchValue] = useState(null);

  const onSearchValueChange = (e) => setSearchValue(e.target.value);

  return (
    <ContentBox>
      <Content title="URL 관리" titleIcon={<LinkIcon sx={{ fontSize: 32 }} />}>
        {/* Header Action Bar Component. */}
        <ActionBar
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
        />
      </Content>
    </ContentBox>
  );
}

export default Urls;
