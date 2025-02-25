import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">BifrostAuth</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-sm">
                  {user.username}
                </span>
                <Button
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                >
                  Odhlásit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 