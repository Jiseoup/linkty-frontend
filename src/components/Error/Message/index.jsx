import { StyledBox, Title, BasicMessage } from './styled';

// Error Message Component.
function Message({ title, message }) {
  return (
    <StyledBox>
      {/* Error title message. */}
      {title ? <Title>{title}</Title> : null}

      {/* Error basic message. */}
      <BasicMessage>{message}</BasicMessage>
    </StyledBox>
  );
}

export default Message;
