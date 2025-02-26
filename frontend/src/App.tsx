import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Lazy loading stránek
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/auth/RegisterPage'));
const DashboardPage = React.lazy(() => import('./pages/dashboard/DashboardPage'));
const UsersPage = React.lazy(() => import('./pages/users/UsersPage'));
const ProfilePage = React.lazy(() => import('./pages/profile/ProfilePage'));
const SettingsPage = React.lazy(() => import('./pages/settings/SettingsPage'));
const NotFoundPage = React.lazy(() => import('./pages/error/NotFoundPage'));
const OAuthCallbackPage = React.lazy(() => import('./pages/auth/OAuthCallbackPage'));
const ResetPasswordPage = React.lazy(() => import('./pages/auth/ResetPasswordPage'));
const EmailVerificationPage = React.lazy(() => import('./pages/auth/EmailVerificationPage'));

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
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/verify-email" element={<EmailVerificationPage />} />
              <Route path="/auth/callback" element={<OAuthCallbackPage />} />

              {/* Chráněné routy */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/users" element={
                  <ProtectedRoute>
                    <UsersPage />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                } />
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