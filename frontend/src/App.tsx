import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkModeProvider } from "./services/context/DarkMode";
import { useDarkMode } from "./services/customhook/useDarkMode";
import { appTheme } from "./theme/theme";
import Navbar from "./components/molecules/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import SkillSection from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import ContactMeSection from "./pages/ContactMe";
import Footer from "./components/organisms/Footer";
import "./App.css";

const AppContent: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <ThemeProvider theme={isDark ? appTheme.dark : appTheme.light}>
      <Navbar />
      <Home />
      <About />
      <Education />
      <SkillSection />
      <Project />
      <Experience />
      <ContactMeSection />
      <Footer />
    </ThemeProvider>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
