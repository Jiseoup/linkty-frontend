import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

import {
  TopCard,
  EffectiveDateChip,
  Description,
  AlertBox,
  AlertText,
} from './styled';

// Policy top card component for privacy policy and terms of service pages.
function PolicyTopCard({ title, description }) {
  // TODO: 날짜 수정 필요함
  const effectiveDate = '2025년 09월 01일';

  return (
    <TopCard>
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
    </TopCard>
  );
}

export default PolicyTopCard;
