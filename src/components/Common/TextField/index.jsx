import { StyledTextField } from './styled';

// Basic TextField Component.
function TextField({ ...props }) {
  return <StyledTextField {...props} />;
}

TextField.defaultProps = {
  fullWidth: true,
  size: 'medium',
  variant: 'outlined',
  slotProps: {
    inputLabel: { shrink: true },
  },
};

export default TextField;
