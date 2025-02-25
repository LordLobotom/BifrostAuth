import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Nastavení</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Obecná nastavení</h2>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Povolit e-mailová upozornění</span>
              </label>
            </div>
            
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Povolit dvoufaktorové ověření</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Změna hesla</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Současné heslo</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nové heslo</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Potvrzení nového hesla</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            
            <div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Změnit heslo
              </button>
            </div>
          </form>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Nebezpečná zóna</h2>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
            <h3 className="text-lg font-medium text-red-800 dark:text-red-400">Smazat účet</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Tato akce je nevratná. Všechna data spojená s vaším účtem budou trvale smazána.
            </p>
            <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Smazat účet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 