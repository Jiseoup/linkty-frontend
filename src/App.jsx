import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AccessTokenProvider } from './contexts/AccessTokenContext';
import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ToastProvider } from './contexts/ToastContext';
import ServiceLayout from './layouts/ServiceLayout';
import StandaloneLayout from './layouts/StandaloneLayout';
import Error from './pages/Error';
import FindPassword from './pages/FindPassword';
import Privacy from './pages/Footer/Privacy';
import Terms from './pages/Footer/Terms';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
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
                    {/* Main service pages. */}
                    <Route path="/" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/find-password" element={<FindPassword />} />

                    {/* Footer pages. */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                  </Route>

                  {/* Standalone pages layout. */}
                  <Route element={<StandaloneLayout />}>
                    {/* Reset Password pages. */}
                    <Route
                      path="/reset-password/:token"
                      element={<ResetPassword />}
                    />

                    {/* Error pages. */}
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
