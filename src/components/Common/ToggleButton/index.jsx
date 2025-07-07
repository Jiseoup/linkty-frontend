import React from 'react';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { StyledButton } from './styled';

// Toggle Button Component.
function ToggleButton({ label, isOpen, onClick, ...rest }) {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {label} {isOpen ? <ExpandLess /> : <ExpandMore />}
    </StyledButton>
  );
}

export default ToggleButton;
