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

      {/* TODO: MessageBox 컴포넌트 사용할지 고민중... 사용할 경우 Gap이나 MB 조정 필요할수도 */}
      {/* Message contents. */}
      <MessageBox>
        <Message>{message}</Message>
      </MessageBox>
    </Container>
  );
}

export default CardHeader;
