import React, { useEffect } from 'react';
import Navbar from './components/molecules/Navbar';
import HomeSection from './pages/Home';
import './App.css';
import { DarkModeProvider } from './services/context/DarkMode';
import { useDarkMode } from './services/customhook/useDarkMode';
import About from './pages/About';
import Education from './pages/Education';
import SkillSection from './pages/Skills';


function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

const AppContent: React.FC = () => {
  const { isDark } = useDarkMode();

  useEffect(() => {
    document.body.style.color = isDark ? '#fff' : '#000',
    document.body.style.backgroundColor =  isDark ? "#1f1d27" : "#fff"
  },[isDark])

  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <Education />
      <SkillSection />
    </>
  );
};

export default App;
