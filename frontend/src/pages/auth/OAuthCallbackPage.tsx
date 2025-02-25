import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { apiRequest } from '@/lib/api';

const OAuthCallbackPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      // Získání kódu z URL parametrů
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      const provider = params.get('provider') || 'google'; // Výchozí hodnota pro zpětnou kompatibilitu
      
      if (!code) {
        setError('Chybí autorizační kód');
        return;
      }
      
      try {
        // Výměna kódu za token
        const response = await apiRequest<{ access_token: string; user: User }>({
          url: `/auth/oauth/${provider}/callback`,
          method: 'POST',
          data: { code },
        });
        
        if (response.data) {
          const { access_token, user } = response.data;
          
          // Uložení tokenu do localStorage
          localStorage.setItem('token', access_token);
          
          // Aktualizace stavu autentizace
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user, token: access_token },
          });
          
          // Přesměrování zpět na původní stránku nebo na dashboard
          const redirectPath = localStorage.getItem('oauth_redirect_after') || '/';
          localStorage.removeItem('oauth_redirect_after');
          navigate(redirectPath);
        } else {
          setError(response.error || 'Přihlášení se nezdařilo');
        }
      } catch (error: any) {
        setError(error.message || 'Přihlášení se nezdařilo');
      }
    };
    
    handleOAuthCallback();
  }, [location, navigate, dispatch]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive">Chyba přihlášení</h2>
          <p className="mt-2">{error}</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            Zpět na přihlášení
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Přihlašování...</h2>
        <p className="mt-2">Čekejte prosím, probíhá přihlašování.</p>
      </div>
    </div>
  );
};

export default OAuthCallbackPage; 