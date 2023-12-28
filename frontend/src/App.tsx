import React from 'react';
import styled from '@emotion/styled';
import Navbar from './components/molecules/Navbar';
import HomeSection from './pages/Home';
import './App.css';
import { DarkModeProvider } from './services/context/DarkMode';
import { useDarkMode } from './services/customhook/useDarkMode';
import About from './pages/About';

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

const AppContent: React.FC = () => {
  const { isDark } = useDarkMode();

  const AppContainer = styled('div')({
    color: isDark ? '#fff' : '#000',
    backgroundColor: isDark ? "#1f1d27" : "inherit"
  });

  return (
    <AppContainer>
      <Navbar />
      <HomeSection />
      <About />
    </AppContainer>
  );
};

export default App;
