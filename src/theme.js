import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#405CF5',
      dark: '#2E43C6',
      light: '#7A8CFF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8A7ADF',
      dark: '#6C5DC8',
      light: '#B0A8F7',
      contrastText: '#FFFFFF',
    },
    tooltip: {
      main: '#434343',
      contrastText: '#FFFFFF',
    },
  },
});

export default theme;
