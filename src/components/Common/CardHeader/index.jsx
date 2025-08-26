import {
  Container,
  TitleBox,
  TitleLogo,
  TitleText,
  Message,
  MessageBox,
} from './styled';

// Common Card Header Component.
function CardHeader({ title, message }) {
  return (
    <Container>
      {/* Title contents. */}
      <TitleBox>
        <TitleLogo src="/logo.png" alt="Linkty Logo" />
        <TitleText>{title}</TitleText>
      </TitleBox>

      {/* Message contents. */}
      <MessageBox>
        <Message>{message}</Message>
      </MessageBox>
    </Container>
  );
}

export default CardHeader;
