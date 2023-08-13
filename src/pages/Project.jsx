import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ToggleContext } from "../Hooks/ThemeContext";

export const Projects = () => {
  const { isToggle } = useContext(ToggleContext);

  return (
    <section
      id="projects"
      className={`${
        isToggle ? "bg-slate-900 text-white" : "bg-slate-50"
      } transition duration-700 ease xl:h-full py-20 relative overflow-hidden`}>
      <div className="m-auto sm:w-[90%] md:w-[60%] ">
        <h1 className="text-md font-bold text-blue-500 uppercase">Projects</h1>
        <h2 className="text-2xl font-bold  mt-5">
          Each Project has a unique piece of development 🧩
        </h2>

        {/* First Project */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
          className="border-r-8 border-blue-400 bg-white rounded-xl shadow-md xxl:flex items-start  gap-5 mt-10">
          <a
            className=""
            href="https://wayfarer-beta.vercel.app/"
            target="_blank">
            <img
              className="w-full h-full object-cover border-slate-600"
              src="/images/proj1.png"
              alt=""
            />
          </a>

          <div className="w-full xxl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3">
            <h1 className="text-center text-slate-900 font-bold text-[20px] ">
              Booking Website 📖
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-start text-[14px] text-gray-500 px-2">
              Booking Website Landing Page. The website provides an interface
              for searching and viewing places around the world especially
              Philippines .
            </motion.p>
            <div className="flex gap-5 text-slate-900 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/Wayfarer"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://wayfarer-beta.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2nd Project */}
        <div className=" bg-white text-slate-900 rounded-xl shadow-md xxl:flex xl:flex-row-reverse  items-start  gap-5 mt-10 border-l-8 border-red-400">
          <a className="" href="https://cartimar.vercel.app/" target="_blank">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                className="w-full h-full object-cover "
                src="/images/proj3.png"
                alt=""
              />
            </motion.div>
          </a>

          <div className="w-full xxl:mt-0 sm:mt-5 flex flex-col space-y-4 p-5  ">
            <h1 className="text-center  font-bold text-[20px] ">
              Add to Cart Website 🛒
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-start text-[14px] tracking-wide text-gray-500">
              E-Commerce website built with Tailwind and React JS. Provides a
              user interface with an interactive and functionality display.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/Cartimar"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://cartimar.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 3rd Project */}
        <div className="bg-white text-slate-900 rounded-xl shadow-md xxl:flex  items-start  gap-5 mt-10 border-r-8 border-green-400">
          <a
            className=""
            href="https://todo-app-five-opal.vercel.app/"
            target="_blank">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                className="w-full h-full object-cover "
                src="/images/proj2.png"
                alt=""
              />
            </motion.div>
          </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3  ">
            <h1 className="text-center font-bold text-[20px] ">Todo App 🖊️</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-start text-[14px] tracking-wide px-5 text-gray-500">
              The todo app developed with React.js and local storage provides a
              streamlined and intuitive user experience for task management.
              With the help of React.js.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/TodoApp"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://todo-app-five-opal.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 4th Project */}
        <div className="bg-white rounded-xl text-slate-900 shadow-md xxl:flex xl:flex-row-reverse items-start mt-10 border-l-8 border-purple-400">
          <a
            className=""
            href="https://dictionary-ten-ashy.vercel.app/"
            target="_blank">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                className="w-full h-full object-cover border"
                src="/images/proj4.png"
                alt=""
              />
            </motion.div>
          </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              Dictionary 📖
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] text-gray-500">
              Dictionary website using API
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/Dictionary"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://dictionary-ten-ashy.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 5th Project */}
        <div className="bg-white rounded-xl text-slate-900 shadow-md xxl:flex items-start gap-5 mt-10 border-r-8 border-indigo-400">
          <a
            className=""
            href="https://rieevans.github.io/jobportal.github.io/"
            target="_blank">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                className="w-full h-full object-cover "
                src="/images/proj5.png"
                alt=""
              />
            </motion.div>
          </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-5  ">
            <h1 className="text-center font-bold text-[20px] ">
              Job Hunt Portal 🤸🏻
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center px-5 text-[14px] text-gray-500">
              Landing page for Job hunt. Built with HTML CSS and JS
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600 ">
                HTML CSS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                JAVASCRIPT
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/jobportal.github.io"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://rieevans.github.io/jobportal.github.io/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 6th Project */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white text-slate-900 rounded-xl shadow-md xxl:flex xl:flex-row-reverse items-start gap-5 mt-10 border-l-8 border-violet-900">
    
            <a
              className=""
              href="https://rieevans.github.io/getCoins/tokens.html"
              target="_blank">
          
                <img
                  className="w-full h-full object-cover "
                  src="/images/proj6.png"
                  alt=""
                />
     
            </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-5  ">
            <h1 className="text-center font-bold text-[20px] ">getCoins 🪙</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] px-5 text-gray-500">
              My First Project NFT Website Landing Page using HTML CSS &
              Javascript.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600 ">
                HTML CSS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                JAVASCRIPT
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/getCoins"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://rieevans.github.io/getCoins/tokens.html"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
