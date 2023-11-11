import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Project";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Header } from "./Header/Header";
import { Footer } from "./pages/Footer";
import { LoadingState } from "./components/LoadingState";
import { ToggleContext } from "./Hooks/ThemeContext";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isToggle, setToggle] = useState(() => {
    const savedToggle = localStorage.getItem("darkmodes");
    return savedToggle !== null ? JSON.parse(savedToggle) : null;
  });

  // function to handle toggling 
  const handleToggle = _ => {
    const newToggle = !isToggle;
    setToggle(newToggle);
    localStorage.setItem("darkmodes", JSON.stringify(newToggle)); //update localStorage
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  
  if (loading) {
    return <LoadingState />;
  }

  return (
    <>
      <main>
        <ToggleContext.Provider value={{ isToggle, setToggle: handleToggle }}>
          <Header />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </ToggleContext.Provider>

        <Footer />
      </main>
    </>
  );
}
