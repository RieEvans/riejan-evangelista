import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { Header } from "./Header/Header";
import { Footer } from "./pages/Footer";

import { ToggleContext } from "./Hooks/ThemeContext";


export default function App() {
  const [isToggle, setToggle] = useState(() => {
    const savedToggle = localStorage.getItem("darkmodes");
    return savedToggle !== null ? JSON.parse(savedToggle) : null
  });

 // Define a function to handle toggling and update localStorage
 const handleToggle = () => {
  const newToggle = !isToggle;
  setToggle(newToggle)
  localStorage.setItem('darkmodes', JSON.stringify(newToggle))
 }


  return (
    <>
      <main>
        <ToggleContext.Provider value={{ isToggle, setToggle:handleToggle }}>
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
        </ToggleContext.Provider>

        <Footer />
      </main>
    </>
  );
}
