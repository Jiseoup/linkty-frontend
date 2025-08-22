import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {
  ContentCard,
  Header,
  HeaderText,
  BodyContent,
  ContentBox,
  ContentTitleBox,
  ContentTitleText,
  ItemBox,
  ItemText,
} from './styled';

// Policy contents component for privacy policy and terms of service pages.
function PolicyContent({ title, titleIcon, contents = [] }) {
  return (
    <ContentCard>
      {/* Header contents. */}
      <Header>
        {titleIcon}
        <HeaderText>{title}</HeaderText>
      </Header>

      {/* Body contents. */}
      <BodyContent>
        {/* Iterate body contents and show it. */}
        {contents.map((content, contentIdx) => {
          const hasTitle = !!content.title;

          return (
            <ContentBox key={contentIdx}>
              {/* Show content title if it exists. */}
              {hasTitle && (
                <ContentTitleBox>
                  <FiberManualRecordIcon color="primary" sx={{ fontSize: 8 }} />
                  <ContentTitleText>{content.title}</ContentTitleText>
                </ContentTitleBox>
              )}

              {/* Iterate content items and show it. */}
              {content.items.map((item, itemIdx) => (
                <ItemBox key={itemIdx} hasTitle={hasTitle}>
                  <FiberManualRecordIcon color="primary" sx={{ fontSize: 8 }} />
                  <ItemText>{item}</ItemText>
                </ItemBox>
              ))}
            </ContentBox>
          );
        })}
      </BodyContent>
    </ContentCard>
  );
}

export default PolicyContent;
