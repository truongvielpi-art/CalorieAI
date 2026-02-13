import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout className="items-center justify-between relative selection:bg-primary/30 font-display">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-6 z-10">
        {/* Logo Container */}
        <div className="relative mb-8 animate-float">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full transform scale-110"></div>
          {/* Logo Icon */}
          <div className="relative bg-white dark:bg-background-dark border border-slate-100 dark:border-slate-800 shadow-xl rounded-3xl p-8 flex items-center justify-center h-40 w-40">
            <span className="material-icons-round text-primary text-7xl transform -rotate-12 translate-x-2 translate-y-[-4px] drop-shadow-sm">eco</span>
            <div className="absolute bottom-6 left-6 bg-slate-900 dark:bg-white text-white dark:text-background-dark rounded-xl p-2 shadow-lg flex items-center justify-center border-2 border-white dark:border-background-dark">
              <span className="material-icons-round text-2xl">center_focus_strong</span>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl tracking-tight text-slate-900 dark:text-white">
            <span className="font-bold">Calorie</span><span className="font-light text-slate-500 dark:text-slate-400">AI</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-wide">
            Scan. Eat. Track.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-12 w-full flex flex-col items-center justify-center space-y-6 z-10">
        {/* Loading Spinner */}
        <div aria-label="Loading app" className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">
          v1.0.2 • Smart Nutrition
        </p>
      </footer>
    </Layout>
  );
};

export default SplashScreen;