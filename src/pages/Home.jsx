import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  const titleVariant = {
    offScreen: {
      opacity: 0,
      x: -50,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };

  const textVariant = {
    offScreen: {
      opacity: 0,
      x: -50,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden xl:h-screen sm:py-20 bg-slate-50 flex items-center justify-center">
      <div className="m-auto sm:w-[90%] md:w-[60%] flex sm:flex-col-reverse xl:flex-row gap-5">
        <motion.div>
          <motion.h1
            variants={titleVariant}
            initial="offScreen"
            whileInView={`onScreen`}
            className="relative  xl:text-5xl sm:text-[30px] md:text-6xl  sm:text-center xl:text-start tracking-wide font-bold text-gray-800">
            Front-End Developer{" "}
            <span className="absolute animate-wiggle">👋🏻</span>
          </motion.h1>
          <motion.p
            variants={textVariant}
            initial="offScreen"
            whileInView={`onScreen`}
            className="sm:text-center xl:text-start text-gray-800 tracking-wide text-[16px] sm:mt-0 md:mt-10 leading-6">
            Hi, I'm Riejan Evangelista, Aspiring to be a Front End Developer
            based in Rizal, Philippines 📍
          </motion.p>
          <div className="mt-6 flex items-center sm:justify-center xl:justify-start ">
            <a
              className=""
              href="https://www.linkedin.com/in/riejan-evangelista-cpe-b111b0247/"
              target="_blank">
              <i className="fa-brands fa-linkedin text-3xl "></i>
            </a>
            <a className="" href="https://github.com/RieEvans" target="_blank">
              <i className="fa-brands fa-square-github text-3xl ml-5"></i>
            </a>
          </div>
          <div className="relative flex sm:flex-col xl:flex-row items-center justify-around xl:mt-0 sm:mt-10 z-40 ">
            <p className="border-r border-slate-900 pr-5 text-slate-900 font-semibold">
              Tech Stack
            </p>
            <div className=" tech-icons  transition flex flex-wrap justify-center gap-5 xl:mt-0 sm:mt-5">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                className="  w-[60px] bg-white shadow-xl rounded-full  p-2    ">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="images/html.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, type: "spring", bounce: 0.4 }}
                className=" w-[60px] bg-white shadow-xl rounded-full  p-2   ">
                <img
                  className="w-full h-full object-cover"
                  src="images/css.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, type: "spring", bounce: 0.4 }}
                className=" w-[60px]      bg-white shadow-xl rounded-full  p-2   ">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="images/javascript.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.1, type: "spring", bounce: 0.4 }}
                className=" w-[60px]    bg-white shadow-xl rounded-full  p-2  ">
                <img
                  className="w-full h-full object-cover"
                  src="images/react.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.7, type: "spring", bounce: 0.4 }}
                className="  w-[60px] bg-white shadow-xl rounded-full  p-2   ">
                <img
                  className="w-full h-full object-cover"
                  src="images/tailwind.svg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-full sm:w-[300px] xl:w-[300px]  relative">
            <img
              className="animate-blob w-full border border-slate-100 z-50 h-full object-cover"
              src="/profile.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ scale:0.1}} whileInView={{scale:1}} transition={{duration:2, type: "spring", bounce: 0.1, }} viewport={{once:true}} className="w-[600px] h-[600px] rounded-full bg-blue-300 absolute bottom-[-320px] left-[-320px]"></motion.div>
      <motion.div initial={{scale:0.1}} whileInView={{scale:1}} transition={{duration:2, type: "spring", bounce: 0.1, }} viewport={{once:true}} className="w-[600px] h-[600px] rounded-full bg-green-300 absolute bottom-[-320px] right-[-320px]"></motion.div>
    </section>
  );
};
