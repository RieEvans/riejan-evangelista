import React, { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ToggleContext } from "../Hooks/ThemeContext";

export const Header = () => {
  // Context Hook

  const { isToggle, setToggle } = useContext(ToggleContext);
  // Animation Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className={`${isToggle ? "text-white" : ""} z-50 relative `}>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 bottom-0 h-[4px] z-50 bg-indigo-600">
        <h1>
          <code>useScroll</code>
        </h1>
      </motion.div>{" "}
      {/* Scroll Line Progress */}
      <header className="z-50 flex xl:flex justify-center fixed bottom-0 xl:top-40 xl:right-6 h-[8.5vh] w-full xl:h-[50vh] xl:w-[60px] bg-red-500 xl:rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border-t xl:border border-blue-300 p-5">
        <nav className="flex space-x-10 xl:space-x-0 xl:flex-col xl:space-y-10 items-center justify-center">
          <a href="#home" >
            <i className="fa-solid fa-house-user xl:text-2xl text-3xl"></i>
          </a>
      
          <a href="#about">
            <i className="fa-regular fa-address-card xl:text-2xl text-3xl"></i>
          </a>
          <a href="#projects">
            <i className="fa-solid fa-list-check xl:text-2xl text-3xl"></i>
          </a>
          <a href="#contact">
            <i className="fa-regular fa-address-book xl:text-2xl text-3xl"></i>
          </a>
          <div
            onClick={() => setToggle(!isToggle)}
            className={`${
              isToggle
                ? "fa-regular fa-sun text-2xl text-yellow-300"
                : "fa-regular fa-moon text-2xl text-indigo-600"
            } cursor-pointer `}></div>
        </nav>
      </header>
    </section>
  );
};
