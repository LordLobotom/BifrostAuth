import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/users', label: 'Uživatelé', icon: '👥' },
    { path: '/profile', label: 'Profil', icon: '👤' },
    { path: '/settings', label: 'Nastavení', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Menu</h2>
      </div>
      <nav className="mt-5">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="px-4 py-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-md ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 