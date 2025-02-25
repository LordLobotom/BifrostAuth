import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

interface OAuthButtonsProps {
  action: 'login' | 'register';
}

export const OAuthButtons: React.FC<OAuthButtonsProps> = ({ action }) => {
  const { oauthLogin, loading } = useAuth();

  const handleGoogleLogin = async () => {
    await oauthLogin('google');
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Nebo {action === 'login' ? 'se přihlaste' : 'se zaregistrujte'} pomocí
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={loading}
        className="w-full"
        onClick={handleGoogleLogin}
      >
        <svg
          className="mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        {action === 'login' ? 'Přihlásit se' : 'Zaregistrovat se'} pomocí Google
      </Button>
    </div>
  );
}; 