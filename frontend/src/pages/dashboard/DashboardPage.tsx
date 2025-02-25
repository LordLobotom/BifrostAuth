import React from 'react';
import { useAuth } from '../../context/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Vítejte, {user?.username}!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Toto je hlavní dashboard BifrostAuth aplikace. Zde budou zobrazeny základní statistiky a přehledy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 dark:text-blue-400">Celkem uživatelů</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-green-700 dark:text-green-400">Aktivní uživatelé</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-purple-700 dark:text-purple-400">Přihlášení dnes</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 