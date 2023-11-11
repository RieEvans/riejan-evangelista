import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ToggleContext } from "../Hooks/ThemeContext";
import { WaveNight } from "../components/WaveNight";
import { WaveLight } from "../components/WaveLight";

export const About = () => {

  // Context Hooks
  const {isToggle} = useContext(ToggleContext)

  const imageVariant = {
    offScreen: {
      y: 300,
      opacity: 0,
    },
    onScreen: {
      y: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const textVariant = {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className={`${isToggle ? "bg-slate-800" : ""} relative overflow-hidden transition duration-700 ease py-20 flex items-center justify-center overflow-hidden`}>
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="m-auto sm:w-[90%]  md:w-[60%] grid xl:grid-cols-2 gap-10">
        <motion.div
          variants={imageVariant}
          className="flex justify-center items-center">
          <div className="relative ">
            <img
              className="w-full h-full rounded-xl h-full  "
              src="/images/about.png"
              alt=""
            />
            <div className="rounded-full bg-blue-400 absolute w-[60px] h-[60px] top-0 z-0"></div>
            <div className="rounded-full bg-emerald-400 absolute w-[60px] h-[60px] top-0 right-0 z-0"></div>
            <div className="rounded-full bg-red-400 absolute w-[60px] h-[60px] bottom-0 right-0 z-0"></div>
            <div className="rounded-full bg-indigo-400 absolute w-[60px] h-[60px] bottom-0 left-0 z-0"></div>
          </div>
        </motion.div>
        <motion.div variants={textVariant} className="flex z-30 flex-col space-y-5 space-x-2 ">
          <h1 className="text-blue-400 pl-2 font-bold ">ABOUT 😉</h1>
          <motion.p
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.8 }}
            className="text-gray-500 tracking-wide space-y-2 leading-8">
            As a dedicated and passionate learner in the field of development I
            have an interest in creating interactive and user focused web
            applications. I have built my foundation learning the
            fundamentals.HTML, CSS and JavaScript to build visually appealing
            and responsive front end interfaces. I am enthusiastic, about
            contributing my skills to design user experiences while working
            collaboratively within a team oriented setting.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 xl:top-[-50px] w-full">
        {isToggle ?  <WaveNight /> : <WaveLight />}
      </div>

      <motion.div
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, type: "spring", bounce: 0.1 }}
        viewport={{ once: true }}
        className="w-[600px] h-[600px] rounded-full bg-blue-300 absolute bottom-[-320px] left-[-320px]"></motion.div>
      <motion.div
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, type: "spring", bounce: 0.1 }}
        viewport={{ once: true }}
        className="w-[600px] h-[600px] rounded-full bg-green-300 absolute bottom-[-320px] right-[-320px]"></motion.div>

    </section>
  );
};
