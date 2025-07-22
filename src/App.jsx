import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Alert from './components/Common/Alert';
import AxiosInterceptor from './components/Common/AxiosInterceptor';
import { AccessTokenProvider } from './contexts/AccessTokenContext';
import { AlertProvider } from './contexts/AlertContext';
import Main from './pages/Main';
import Register from './pages/Register';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <AccessTokenProvider>
          <AxiosInterceptor />
          <Alert />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </AccessTokenProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
