import React, { useContext } from "react";
import { ToggleContext } from "../Hooks/ThemeContext";

export const Skills = () => {
  const { isToggle } = useContext(ToggleContext);
  return (
    <section
      className={`${
        isToggle ? "bg-slate-800 text-white" : "bg-white"
      } transition duration-700 ease xl:h-full py-20 relative overflow-hidden`}>
      <main className="m-auto sm:w-[90%] md:w-[60%]">
        <h1 className="text-blue-400 font-bold uppercase tracking-wide text-2xl">
          Skills
        </h1>
        <p className="font-bold">Technical Level</p>

        <div className="grid mt-5">
          <div className="bg-slate-900 sm:grid-cols-3 grid xl:grid-cols-4 justify-items-center content-center p-5 gap-2 rounded-md">
            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/react.svg" />
              <span className="text-white">React</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/nextJS.png" />
              <span className="text-white">NextJS</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="/images/tailwindLogo.png"
              />
              <span className="text-white">Tailwind</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/js.png" />
              <span className="text-white">Javascript</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/typescript.png" />
              <span className="text-white">Typscript</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/bootstrap.png" />
              <span className="text-white">Bootstrap</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/htmlLogo.png" />
              <span className="text-white">HTML</span>
            </div>

            <div className="flex flex-col items-center"> 
              <img className="w-[40px] h-[40px]" src="/images/cssLogo.png" />
              <span className="text-white">CSS</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/materialUI.png" />
              <span className="text-white">MaterialUI</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/mySQL.png" />
              <span className="text-white">mySQL</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="/images/mongoDB.png" />
              <span className="text-white">MongoDB</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
