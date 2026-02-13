import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BottomNav } from '../components/BottomNav';
import { Meal } from '../types';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const meals: Meal[] = [
    {
      id: '1',
      name: 'Oatmeal & Berries',
      time: 'Breakfast • 8:30 AM',
      calories: 350,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACP9SKGjAJbXb2kkN4fdL833Hpmynb5n3-cpDbR8ujfn4_hpY4Hc_vVN3GOOsGCD6cqNHSG2xZYyZ0vWwla6G_8HMVCMxj-ayK0PyjcjpLOfCCKceAhrKesISodHt7iUZv-1FzEOj39eKrPr84MNd_VTR6OgWzxSXQhJEuf0ixGoIfLDr7fZN6MA-BFx4BWvwZkbrsaX0Gd4Bb_zgSKULBZYVvKZYCaFjOLKPzrSOpZIZJTO74uIQ0fN2UXH3YPAXgRACJCqqkT4E',
      type: 'Breakfast'
    },
    {
      id: '2',
      name: 'Avocado Chicken Salad',
      time: 'Lunch • 12:45 PM',
      calories: 520,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4m0gerfTZJqRLE590QfI6cheW4j1t1Q9c5N_hJ2OXezdXoGmK6A83JjitMAehh52G3m45gYhCJ331zfzinAv1Z4yEbJidyLz7jej1oV0N-HtKk0wgCra7oWxnOuw7rzCEVcrOgDwyQjKa5yF4wjwEiw0iFp48ajMVdklZ0tIV_uII_2EYY9f6o0Js4F-tj8W3ig7xYcmy85zdI6U6Rv8yBl_dlJkR5ypkrslGCjmEIaxaw9EriBZm0I2s78Sp6NnUbdN7SRnzgNk',
      type: 'Lunch'
    }
  ];

  return (
    <Layout className="relative">
      {/* Header */}
      <header className="pt-12 pb-2 px-6 flex justify-between items-center z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Monday, Oct 24</p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hello, Sarah! 👋</h1>
        </div>
        <button className="relative p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-mjaZ1RPUfjktKy1tIwhdfOi1ccY6Uap13-0sK7eoF8znTKm22IthDp2XjXHDN3MhH2hZblIMMX-jqlmv0bgfSj7ql7Z4CQh_7be-FbXg4-BAmItgsOv0tvoY8J2PFYnn4UHGMnRouCm0xRXT_tt9sTl-vUIinEuqkedjbfHDkrPNU7qCIFm42D8I9p-IWYxVrumw7pB5BO01aksh-FgHyyYyKYEgTBBaNjhCBsFoR1V63SPGs7Valr9ws3yFjQJ6SVLwgjdAk-w" 
            />
          </div>
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 border-2 border-white dark:border-background-dark rounded-full"></span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 px-6 pt-4 space-y-8">
        
        {/* Progress Ring */}
        <section className="flex flex-col items-center justify-center py-4 relative">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle className="text-gray-100 dark:text-gray-800" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></circle>
              <circle 
                className="text-primary drop-shadow-md transition-all duration-1000 ease-out" 
                cx="50" cy="50" fill="none" r="45" 
                stroke="currentColor" 
                strokeDasharray="283" 
                strokeDashoffset="70" 
                strokeLinecap="round" 
                strokeWidth="8"
              ></circle>
            </svg>
            
            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-gray-400 dark:text-gray-500 text-sm font-medium mb-1">Remaining</span>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">1,250</span>
              </div>
              <span className="text-primary font-semibold text-sm mt-1">kcal left</span>
              
              <div className="mt-4 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center gap-1">
                <span className="material-icons-round text-primary text-xs">local_fire_department</span>
                <span className="text-xs font-semibold text-primary-dark dark:text-primary">1450 burned</span>
              </div>
            </div>
          </div>
        </section>

        {/* Macros */}
        <section className="grid grid-cols-3 gap-4">
          {/* Carbs */}
          <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/10">
            <div className="mb-2 p-2 bg-cream dark:bg-yellow-900/20 rounded-full text-yellow-600 dark:text-yellow-400">
              <span className="material-icons-round text-lg">bakery_dining</span>
            </div>
            <span className="text-xs text-gray-500 font-medium mb-1">Carbs</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">120g</span>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-yellow-400 w-3/4 rounded-full"></div>
            </div>
          </div>

          {/* Protein */}
          <div className="bg-primary/10 p-4 rounded-2xl flex flex-col items-center text-center border border-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-full -mr-2 -mt-2"></div>
            <div className="mb-2 p-2 bg-primary/20 rounded-full text-primary-dark dark:text-primary">
              <span className="material-icons-round text-lg">fitness_center</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-300 font-medium mb-1">Protein</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">95g</span>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-primary w-1/2 rounded-full shadow-[0_0_10px_rgba(19,236,128,0.5)]"></div>
            </div>
          </div>

          {/* Fat */}
          <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-sage/30">
            <div className="mb-2 p-2 bg-sage/20 rounded-full text-sage dark:text-gray-300">
              <span className="material-icons-round text-lg">opacity</span>
            </div>
            <span className="text-xs text-gray-500 font-medium mb-1">Fat</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">40g</span>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-sage w-1/3 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Today's Meals */}
        <section className="space-y-4">
          <div className="flex justify-between items-end px-1">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Today's Meals</h2>
            <button className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors">View All</button>
          </div>
          <div className="space-y-3">
            {meals.map((meal) => (
              <div key={meal.id} className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 relative">
                  <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{meal.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{meal.time}</p>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-gray-900 dark:text-white">{meal.calories}</span>
                  <span className="text-xs text-gray-400">kcal</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button & Nav */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="absolute bottom-[4.5rem] left-1/2 transform -translate-x-1/2 z-30">
          <button 
            onClick={() => navigate('/camera')}
            className="group w-16 h-16 bg-primary hover:bg-primary-dark text-background-dark rounded-full shadow-[0_10px_40px_-10px_rgba(19,236,128,0.15)] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ring-4 ring-white dark:ring-background-dark"
          >
            <span className="material-icons-round text-3xl group-hover:animate-pulse">photo_camera</span>
            <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20"></span>
          </button>
        </div>
        <BottomNav activeTab="home" />
      </div>
    </Layout>
  );
};

export default HomeScreen;