import { Container, TitleBox, TitleText, BodyContent } from './styled';

// Content component including title and body contents.
function Content({ title, titleIcon, children }) {
  return (
    <Container>
      {/* Title contents. */}
      <TitleBox>
        {titleIcon}
        <TitleText>{title}</TitleText>
      </TitleBox>

      {/* Body Contents. */}
      <BodyContent>{children}</BodyContent>
    </Container>
  );
}

export default Content;
