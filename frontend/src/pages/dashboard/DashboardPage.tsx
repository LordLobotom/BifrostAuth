import React from 'react';
import { useAuth } from '@/context/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Statistiky */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Vítejte zpět</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {user?.username}
          </p>
        </div>

        {/* Aktivita */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Poslední aktivita</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Žádná nedávná aktivita
          </p>
        </div>

        {/* Rychlé akce */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Rychlé akce</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Upravit profil
            </button>
            <button className="w-full px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
              Zobrazit nastavení
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 