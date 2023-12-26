import React from 'react';
import styled from '@emotion/styled';
import Navbar from './components/molecules/Navbar';
import HomeSection from './pages/Home';
import './App.css';
import { DarkModeProvider } from './services/context/DarkMode';
import { useDarkMode } from './services/customhook/useDarkMode';

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
    color:isDark ? '#fff' : 'inherit',
  });

  return (
    <AppContainer>
      <Navbar />
      <HomeSection />
    </AppContainer>
  );
};

export default App;
