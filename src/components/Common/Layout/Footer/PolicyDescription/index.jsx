import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

import {
  DescriptionCard,
  EffectiveDateChip,
  Description,
  AlertBox,
  AlertText,
} from './styled';

// Policy top card component for privacy policy and terms of service pages.
function PolicyDescription({ title, description }) {
  const effectiveDate = '2025년 09월 01일'; // TODO: 날짜 수정 필요함

  return (
    <DescriptionCard>
      {/* Chip component of effective date. */}
      <EffectiveDateChip
        icon={<EventAvailableOutlinedIcon fontSize="small" />}
        label={`시행 일자: ${effectiveDate}`}
        color="primary"
      />

      {/* Policy description. */}
      <Description>{description}</Description>

      {/* Alert contents. */}
      <AlertBox severity="info">
        <AlertText>
          본 {title}은 {effectiveDate}부터 적용됩니다.
        </AlertText>
      </AlertBox>
    </DescriptionCard>
  );
}

export default PolicyDescription;
