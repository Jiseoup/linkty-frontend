import { StyledButton } from './styled';

// Basic Button Component.
function Button({ text, ...rest }) {
  return <StyledButton {...rest}>{text}</StyledButton>;
}

export default Button;
