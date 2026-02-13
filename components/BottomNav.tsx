import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BottomNavProps {
  activeTab?: 'home' | 'stats' | 'recipes' | 'profile';
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'home' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: 'home', label: 'Home', path: '/home' },
    { id: 'stats', icon: 'bar_chart', label: 'Stats', path: '/profile' }, // Mapping stats to profile for demo
    { id: 'recipes', icon: 'restaurant_menu', label: 'Recipes', path: '/home' },
    { id: 'profile', icon: 'person', label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="bg-white dark:bg-[#152a20] pt-3 pb-6 px-6 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] relative z-20">
      <div className="flex justify-between items-center h-16 max-w-sm mx-auto">
        {navItems.map((item, index) => {
           // Insert spacer for FAB in the middle
           if (index === 2) {
             return (
               <React.Fragment key="spacer">
                  <div className="w-16"></div>
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`flex flex-col items-center justify-center w-12 h-full space-y-1 transition-colors ${
                      activeTab === item.id ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                    }`}
                  >
                    <span className="material-icons-round text-2xl">{item.icon}</span>
                    <span className="text-[10px] font-medium">{item.label}</span>
                  </button>
               </React.Fragment>
             );
           }
           
           return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-12 h-full space-y-1 transition-colors ${
                activeTab === item.id ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
              }`}
            >
              <span className="material-icons-round text-2xl">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
           );
        })}
      </div>
    </nav>
  );
};