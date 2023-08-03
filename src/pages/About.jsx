import React from "react";
import {motion} from "framer-motion"

export const About = () => {

  const imageVariant = {
    offScreen: {
      y:300,
      opacity: 0,
    },
    onScreen: {
      y:5,
      opacity:1,
      transition: {
        type:"spring",
        bounce:0.4,
        duration:1,
      }
    }
  }

  const textVariant = {
    offScreen:{
      x:100,
      opacity:0,
    },
    onScreen: {
      x:5,
      opacity:1,
      transition: {
        type:"spring",
        bounce:0.4,
        duration:1,
      }
    }
  }
 
  return (
    <section  id="about" className="bg-white py-20 flex items-center justify-center overflow-hidden ">
      <motion.div  initial="offScreen" whileInView="onScreen" viewport={{ once: true}}  className="m-auto sm:w-[90%] md:w-[60%] grid xl:grid-cols-2 gap-10">
        <motion.div variants={imageVariant}  className="flex justify-center items-center">
          <div className="relative z-50">
            <img
              className="w-full h-full rounded-xl h-full z-50 "
              src="/images/about.png"
              alt=""
            />
            <div className="rounded-full bg-blue-400 absolute w-[60px] h-[60px] top-0 z-0"></div>
            <div className="rounded-full bg-emerald-400 absolute w-[60px] h-[60px] top-0 right-0 z-0"></div>
            <div className="rounded-full bg-red-400 absolute w-[60px] h-[60px] bottom-0 right-0 z-0"></div>
            <div className="rounded-full bg-indigo-400 absolute w-[60px] h-[60px] bottom-0 left-0 z-0"></div>

            
          </div>
        </motion.div>
        <motion.div variants={textVariant} className="flex flex-col gap-5 sm:text-center xl:text-justify">
          <h1 className="text-blue-400 font-bold">ABOUT ME 😉</h1>
          <h2 className="text-2xl text-slate-900 font-bold sm:text-center md:text-start">
            A dedicated Front-end Developer based in Rizal, Philippines 📍
          </h2>
          <motion.p initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.8 }} className=" opacity-60">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, DaisyUI and Figma for Web Design Prototype. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. 
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
