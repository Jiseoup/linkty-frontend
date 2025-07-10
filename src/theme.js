import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#405cf5',
      dark: '#2e43c6',
      light: '#7a8cff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8A7ADF',
      dark: '#6C5DC8',
      light: '#B0A8F7',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
