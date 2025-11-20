import dayjs from 'dayjs';

import {
  STATUS_FILTER_OPTIONS,
  STARRED_FILTER_OPTIONS,
  DATE_TYPE_FILTER_OPTIONS,
} from '../../../../constants/Dropdown';
import Dropdown from '../../../Common/Dropdown';

import {
  Container,
  FilterGroup,
  DateRangeBox,
  DateInput,
  TildeSign,
} from './styled';

function FilterBar({
  statusFilter,
  onStatusFilterChange,
  starredFilter,
  onStarredFilterChange,
  dateTypeFilter,
  onDateTypeFilterChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}) {
  // Define Filter Configurations.
  const filterConfig = [
    {
      label: '상태',
      value: statusFilter,
      onChange: onStatusFilterChange,
      options: STATUS_FILTER_OPTIONS,
    },
    {
      label: '즐겨찾기',
      value: starredFilter,
      onChange: onStarredFilterChange,
      options: STARRED_FILTER_OPTIONS,
    },
    {
      label: '날짜 유형',
      value: dateTypeFilter,
      onChange: onDateTypeFilterChange,
      options: DATE_TYPE_FILTER_OPTIONS,
    },
  ];

  return (
    <Container>
      {/* Dropdown Filter Components. */}
      {filterConfig.map((filter) => (
        <FilterGroup key={filter.label}>
          <Dropdown
            label={filter.label}
            value={filter.value}
            onChange={(e) => filter.onChange(e.target.value)}
            options={filter.options}
          />
        </FilterGroup>
      ))}

      {/* Date Range Components. */}
      {dateTypeFilter !== DATE_TYPE_FILTER_OPTIONS[0].value && (
        <DateRangeBox>
          {/* Start Date Component. */}
          <DateInput
            value={startDate ? dayjs(startDate) : null}
            onChange={onStartDateChange}
            slotProps={{ textField: { size: 'small' } }}
          />

          {/* Tilde Sign Component. */}
          <TildeSign />

          {/* End Date Component. */}
          <DateInput
            value={endDate ? dayjs(endDate) : null}
            onChange={onEndDateChange}
            slotProps={{ textField: { size: 'small' } }}
          />
        </DateRangeBox>

        // TODO: Filter 적용 버튼 추가 고려
      )}
    </Container>
  );
}

export default FilterBar;
