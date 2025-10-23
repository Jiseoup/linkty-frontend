import { StyledCard, TitleBox, TitleText, CardDivider } from './styled';

// Common ContentCard Component.
function ContentCard({ title, icon, children }) {
  return (
    <StyledCard>
      {/* Title contents. */}
      <TitleBox>
        {icon}
        <TitleText>{title}</TitleText>
      </TitleBox>

      {/* Card divider. */}
      <CardDivider />

      {children}
    </StyledCard>
  );
}

export default ContentCard;
