import React from 'react';

import { TextField as MuiTextField } from '@mui/material';

function TextField({ ...props }) {
  return <MuiTextField {...props} />;
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
