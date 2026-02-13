import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full bg-background-light dark:bg-background-dark overflow-hidden relative">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
        <Route path="/analysis" element={<AnalysisScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}