import React from 'react';
import { useAuth } from '../../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Uživatelský profil</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-4xl">
                {user?.username.charAt(0).toUpperCase()}
              </div>
              <h2 className="mt-4 text-xl font-semibold">{user?.username}</h2>
              <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-lg font-medium mb-4">Informace o profilu</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Uživatelské jméno</label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md">
                  {user?.username}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md">
                  {user?.email}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Stav účtu</label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md">
                  {user?.isActive ? 'Aktivní' : 'Neaktivní'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Datum registrace</label>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md">
                  {new Date(user?.createdAt || '').toLocaleDateString('cs-CZ')}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Upravit profil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 