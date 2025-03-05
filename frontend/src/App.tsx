import React, { useEffect, useState } from "react";
import Navbar from "./components/molecules/Navbar";
import HomeSection from "./pages/Home";
import { DarkModeProvider } from "./services/context/DarkMode";
import { useDarkMode } from "./services/customhook/useDarkMode";
import About from "./pages/About";
import Education from "./pages/Education";
import SkillSection from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import ContactMeSection from "./pages/ContactMe";
import Footer from "./components/organisms/Footer";
import "./App.css";
import PortfolioSkeletonLoader from "./components/molecules/SkeletonLoader";

const AppContent: React.FC = () => {
  const { isDark } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.color = isDark ? "#E4E6EB" : "#000";  // Light gray text in dark mode
    document.body.style.fontWeight = isDark ? "500" : "inherit";
    document.body.style.backgroundColor = isDark ? "#18191A" : "#fff"; // Dark grayish background
  }, [isDark]);
  

  return (
    <>
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
    </>
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
