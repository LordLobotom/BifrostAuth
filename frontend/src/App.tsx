import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import { ThemeProvider } from './components/theme-provider';

// Lazy loading stránek
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/auth/RegisterPage'));
const DashboardPage = React.lazy(() => import('./pages/dashboard/DashboardPage'));
const UsersPage = React.lazy(() => import('./pages/users/UsersPage'));
const ProfilePage = React.lazy(() => import('./pages/profile/ProfilePage'));
const SettingsPage = React.lazy(() => import('./pages/settings/SettingsPage'));
const NotFoundPage = React.lazy(() => import('./pages/error/NotFoundPage'));
const OAuthCallbackPage = React.lazy(() => import('./pages/auth/OAuthCallbackPage'));

// Komponenta pro chráněné routy
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Načítání...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="bifrostauth-theme">
      <AuthProvider>
        <Router>
          <React.Suspense fallback={<div className="flex items-center justify-center h-screen">Načítání...</div>}>
            <Routes>
              {/* Veřejné routy */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/auth/callback" element={<OAuthCallbackPage />} />

              {/* Chráněné routy */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <MainLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>

              {/* 404 stránka */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </React.Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 