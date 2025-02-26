import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { OAuthButtons } from '@/components/auth/OAuthButtons';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ username, password });
  };

  const handleTestLogin = async () => {
    await login({
      username: 'testuser',
      password: 'testpassword'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Přihlášení do aplikace</CardTitle>
          <CardDescription className="text-center">
            Zadejte své přihlašovací údaje pro přístup do systému
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Uživatelské jméno
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Zadejte uživatelské jméno"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Heslo
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Zadejte heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-destructive text-sm text-center">{error}</div>
            )}

            <div className="flex items-center justify-end">
              <Button
                variant="link"
                type="button"
                onClick={() => navigate('/reset-password')}
                className="text-sm"
              >
                Zapomenuté heslo?
              </Button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Přihlašování...' : 'Přihlásit se'}
            </Button>
            
            <OAuthButtons action="login" />
          </form>
          
          <div className="mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleTestLogin}
              className="w-full"
            >
              Testovací přihlášení
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            onClick={() => navigate('/register')}
          >
            Nemáte účet? Zaregistrujte se
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage; 