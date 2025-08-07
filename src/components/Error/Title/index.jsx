import { Image, Message } from './styled';

// Error Title Logo and Message Component.
function Title({ message }) {
  return (
    <>
      {/* Error Title Logo Image. */}
      <Image src="/title_logo.png" alt="Linkty Logo" />

      {/* Error Title Message. */}
      <Message>{message}</Message>
    </>
  );
}

export default Title;
