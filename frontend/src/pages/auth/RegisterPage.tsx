import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { OAuthButtons } from '@/components/auth/OAuthButtons';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const { register, error, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Hesla se neshodují');
      return;
    }

    await register({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Registrace do aplikace</CardTitle>
          <CardDescription className="text-center">
            Vytvořte si nový účet pro přístup do systému
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
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Zadejte e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Celé jméno
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Zadejte celé jméno"
                value={formData.fullName}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Potvrzení hesla
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Potvrďte heslo"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {passwordError && (
              <div className="text-destructive text-sm text-center">{passwordError}</div>
            )}

            {error && (
              <div className="text-destructive text-sm text-center">{error}</div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Registrace...' : 'Zaregistrovat se'}
            </Button>
            
            <OAuthButtons action="register" />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            onClick={() => navigate('/login')}
          >
            Již máte účet? Přihlaste se
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage; 