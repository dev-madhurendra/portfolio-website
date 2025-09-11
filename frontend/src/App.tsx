import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkModeProvider } from "./services/context/DarkMode";
import { useDarkMode } from "./services/customhook/useDarkMode";
import { appTheme } from "./theme/theme";
import Navbar from "./components/molecules/Navbar";
import HomeSection from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import SkillSection from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import ContactMeSection from "./pages/ContactMe";
import Footer from "./components/organisms/Footer";
import PortfolioSkeletonLoader from "./components/molecules/SkeletonLoader";
import "./App.css";

const AppContent: React.FC = () => {
  const { isDark } = useDarkMode();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemeProvider theme={isDark ? appTheme.dark : appTheme.light}>
      {isLoading ? (
        <PortfolioSkeletonLoader />
      ) : (
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
      )}
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
