import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Alert from './components/Common/Alert';
import AxiosInterceptor from './components/Common/AxiosInterceptor';
import Loading from './components/Common/Loading';
import { AccessTokenProvider } from './contexts/AccessTokenContext';
import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <AccessTokenProvider>
            <LoadingProvider>
              <Loading />
              <AxiosInterceptor />
              <Alert />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </LoadingProvider>
          </AccessTokenProvider>
        </AlertProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
