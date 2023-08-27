import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ToggleContext } from "../Hooks/ThemeContext";

export const Home = () => {
  const { isToggle } = useContext(ToggleContext);

  const titleVariant = {
    offScreen: {
      opacity: 0,
      x: -50,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
        duration: 1.2,
      },
    },
  };

  return (
    <section
      id="home"
      className={`${
        isToggle ? "bg-slate-900 text-white" : "bg-slate-50"
      } transition duration-700 ease relative  h-screen sm:py-20 flex items-center justify-center`}>
      <div className=" m-auto sm:w-[90%]  md:w-[80%] flex md:flex-col xl:flex-row items-center justify-around">
        <div className="z-50  ">
          <motion.h1
            variants={titleVariant}
            initial="offScreen"
            whileInView={`onScreen`}
            className={`relative sm:text-[30px] md:text-5xl  text-start font-bold `}>
            Riejan Evangelista{" "}
            <span className="absolute animate-wiggle">👋🏻</span>
          </motion.h1>
          <motion.h2
            variants={textVariant}
            initial="offScreen"
            whileInView={`onScreen`}
            className="text-xl font-bold tracking-relaxed sm:mt-0 md:my-5 leading-6 ">
            Front end Developer 📍
          </motion.h2>
          <p></p>
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
          <div className="relative flex sm:flex-col xl:flex-row items-center  xl:mt-5 sm:mt-10 z-40 ">
           
            <div className=" tech-icons  transition flex flex-wrap justify-center gap-5 xl:mt-0 sm:mt-5">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                viewport={{once:true}}
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
                viewport={{once:true}}
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
                viewport={{once:true}}
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
                viewport={{once:true}}
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
                viewport={{once:true}}
                className="  w-[60px] bg-white shadow-xl rounded-full  p-2   ">
                <img
                  className="w-full h-full object-cover"
                  src="images/tailwind.svg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          
        </div>
        <section className="xl:block hidden md:my-6 xl:mt-0 z-40">
          <motion.div initial={{opacity:0.5, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:1.5}} className="">
            <img
              className=" clip-First border-8 border-green-400 p-2 z-50 xl:w-[400px] xl:h-[500px] md:w-[300px] md:h-[380px] object-cover"
              src="/images/leftImg.jpg"
              alt=""
            />
          </motion.div>
        </section>
      </div>

      {/* Animation Background Section */}
      <div
        className={`${
          isToggle ? "scale-100" : "scale-0"
        } transition duration-1000 ease-in absolute top-[20px] right-[10px]`}>
        <div className="w-[100px] md:w-[200px]">
          <img src="/moon.svg" alt="Moon" /> {/* Moon */}
          <div className="w-[30px] md:w-[60px] absolute top-[30px] left-[17px] md:top-[60px] md:left-[60px]">
            <img src="/stars.svg" alt="Stars" /> {/* Stars */}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[-190px] left-[-190px] ">
        <div className="w-[400px] md:w-[500px]">
          <img className="w-full h-full object-cover" src="/splatter.svg" />
        </div>
      </motion.div>
    </section>
  );
};
