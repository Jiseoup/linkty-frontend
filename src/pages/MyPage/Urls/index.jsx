import { useState } from 'react';

import LinkIcon from '@mui/icons-material/Link';

import Content from '../../../components/MyPage/Content';
import ContentBox from '../../../components/MyPage/ContentBox';
import ActionBar from '../../../components/MyPage/Urls/ActionBar';
import FilterBar from '../../../components/MyPage/Urls/FilterBar';
import {
  STATUS_FILTER_OPTIONS,
  STARRED_FILTER_OPTIONS,
  DATE_TYPE_FILTER_OPTIONS,
} from '../../../constants/Dropdown';

function Urls() {
  // Search States.
  const [searchValue, setSearchValue] = useState(null);
  const onSearchValueChange = (e) => setSearchValue(e.target.value);

  // Filter States.
  const [statusFilter, setStatusFilter] = useState(
    STATUS_FILTER_OPTIONS[0].value
  );
  const [starredFilter, setStarredFilter] = useState(
    STARRED_FILTER_OPTIONS[0].value
  );
  const [dateTypeFilter, setDateTypeFilter] = useState(
    DATE_TYPE_FILTER_OPTIONS[0].value
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <ContentBox>
      <Content title="URL 관리" titleIcon={<LinkIcon sx={{ fontSize: 32 }} />}>
        {/* Header Action Bar Component. */}
        <ActionBar
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
        />

        {/* Filter Bar Components. */}
        <FilterBar
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          starredFilter={starredFilter}
          onStarredFilterChange={setStarredFilter}
          dateTypeFilter={dateTypeFilter}
          onDateTypeFilterChange={setDateTypeFilter}
          startDate={startDate}
          onStartDateChange={setStartDate}
          endDate={endDate}
          onEndDateChange={setEndDate}
        />
      </Content>
    </ContentBox>
  );
}

export default Urls;
