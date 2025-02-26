import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/api';

const EmailVerificationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('Ověřování e-mailu...');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setStatus('error');
        setMessage('Chybí verifikační token');
        return;
      }

      try {
        const response = await apiRequest({
          url: '/auth/verify-email',
          method: 'POST',
          data: { token }
        });

        if (response.status === 200) {
          setStatus('success');
          setMessage('E-mail byl úspěšně ověřen');
        } else {
          setStatus('error');
          setMessage(response.error || 'Nepodařilo se ověřit e-mail');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Došlo k chybě při ověřování e-mailu');
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Ověření e-mailu</CardTitle>
          <CardDescription className="text-center">
            {status === 'verifying' ? 'Probíhá ověřování vašeho e-mailu' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`text-center ${
            status === 'success' ? 'text-green-600 dark:text-green-400' :
            status === 'error' ? 'text-red-600 dark:text-red-400' :
            ''
          }`}>
            {message}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => navigate('/login')}
          >
            Přejít na přihlášení
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmailVerificationPage; 