import CloseIcon from '@mui/icons-material/Close';

import {
  DialogWrapper,
  Header,
  TitleBox,
  TitleText,
  CloseButton,
  BodyContent,
  Footer,
  ConfirmButton,
} from './styled';

function Dialog({ title, icon, isOpen, onClose, showFooter = true, children }) {
  return (
    <DialogWrapper open={isOpen} onClose={onClose}>
      {/* Header contents. */}
      <Header>
        {/* Title text. */}
        <TitleBox>
          {icon}
          <TitleText>{title}</TitleText>
        </TitleBox>

        {/* Close Button. */}
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Header>

      {/* Body contents. */}
      <BodyContent dividers>{children}</BodyContent>

      {/* Footer contents. */}
      {showFooter && (
        <Footer>
          {/* Confirm Button. */}
          <ConfirmButton
            text="확인"
            variant="contained"
            color="primary"
            onClick={onClose}
          />
        </Footer>
      )}
    </DialogWrapper>
  );
}

export default Dialog;
