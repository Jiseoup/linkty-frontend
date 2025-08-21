import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AccessTokenProvider } from './contexts/AccessTokenContext';
import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ToastProvider } from './contexts/ToastContext';
import ErrorLayout from './layouts/ErrorLayout';
import ServiceLayout from './layouts/ServiceLayout';
import Error from './pages/Error';
import Privacy from './pages/Footer/Privacy';
import Terms from './pages/Footer/Terms';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import theme from './theme';

// TODO: URL 6자리로 끝나지 않도록 주의!
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <AccessTokenProvider>
            <LoadingProvider>
              <ToastProvider>
                <Routes>
                  {/* Service pages layout. */}
                  <Route element={<ServiceLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    {/* Footer pages. */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                  </Route>

                  {/* Error pages layout. */}
                  <Route element={<ErrorLayout />}>
                    <Route path="*" element={<Error />} />
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
