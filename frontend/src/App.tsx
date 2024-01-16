import React, { useEffect } from 'react';
import Navbar from './components/molecules/Navbar';
import HomeSection from './pages/Home';
import { DarkModeProvider } from './services/context/DarkMode';
import { useDarkMode } from './services/customhook/useDarkMode';
import About from './pages/About';
import Education from './pages/Education';
import SkillSection from './pages/Skills';
import Project from './pages/Project';
import Experience from './pages/Experience';
import ContactMeSection from './pages/ContactMe';
import Footer from './components/organisms/Footer';
import './App.css';


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
    document.body.style.fontWeight = isDark ? '500' : 'inherit',
    document.body.style.backgroundColor =  isDark ? "#003950" : "#fff"
  },[isDark])

  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <Education />
      <SkillSection />
      <Project />
      <Experience />
      <ContactMeSection />
      <Footer />
    </>
  );
};

export default App;
