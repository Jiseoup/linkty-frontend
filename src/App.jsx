import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AxiosInterceptor from './components/Common/AxiosInterceptor';
import Layout from './components/Common/Layout';
import { AccessTokenProvider } from './contexts/AccessTokenContext';
import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ToastProvider } from './contexts/ToastContext';
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
              <ToastProvider>
                <AxiosInterceptor />
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                  </Route>
                </Routes>
              </ToastProvider>
            </LoadingProvider>
          </AccessTokenProvider>
        </AlertProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
