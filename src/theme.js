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
    alert: {
      info: {
        main: '#2196F3',
        light: '#EAF1FB',
      },
      success: {
        main: '#4CAF50',
        light: '#EAF7EA',
      },
      warning: {
        main: '#FF9800',
        light: '#FFF4E5',
      },
      error: {
        main: '#F44336',
        light: '#FDEAEA',
      },
      default: '#434343',
    },
    tooltip: {
      main: '#434343',
      contrastText: '#FFFFFF',
    },
    link: {
      main: '#555555',
      hover: '#333333',
    },
    footer: {
      main: '#FAFAFA',
      light: '#DFDFDF',
      background: '#1F1F1F',
    },
  },
  gradient: {
    primary: {
      background: '#6A82FB 0%, #FC5C7D 100%',
      contrastText: '#FFFFFF',
    },
    secondary: {
      background: '#6366F1 0%, #4F46E5 100%',
      contrastText: '#FFFFFF',
    },
  },
  layout: {
    main: {
      height: '100vh',
    },
  },
});

export default theme;
