import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

import {
  ContactCard,
  TitleWrapper,
  TitleText,
  ContentWrapper,
  ContentBox,
  LabelText,
  ValueText,
} from './styled';

// Policy contacts component for privacy policy and terms of service pages.
function PolicyContact({ title, titleIcon, nameLabel }) {
  return (
    <ContactCard>
      {/* Title contents. */}
      <TitleWrapper>
        {titleIcon}
        <TitleText>{title}</TitleText>
      </TitleWrapper>

      {/* Body contents. */}
      <ContentWrapper>
        {/* Manager/Provider name contents box. */}
        <ContentBox>
          <PersonIcon />
          <LabelText>{nameLabel}</LabelText>
          <ValueText>임지섭 (Linkty)</ValueText>
        </ContentBox>

        {/* Email contents box. */}
        <ContentBox>
          <EmailIcon />
          <LabelText>이메일 주소 :</LabelText>
          <ValueText>support@linkty.kr</ValueText>
        </ContentBox>
      </ContentWrapper>
    </ContactCard>
  );
}

export default PolicyContact;
