import { StyledBox } from './styled';

// Form Box Component.
function FormBox({ ...props }) {
  return <StyledBox {...props} />;
}

FormBox.defaultProps = {
  component: 'form',
};

export default FormBox;
