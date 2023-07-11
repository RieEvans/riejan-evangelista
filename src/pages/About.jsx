import React from "react";

export const About = () => {
  return (
    <section id="about" className="bg-white py-20 flex items-center justify-center ">
      <div className="m-auto sm:w-[90%] md:w-[60%] grid xl:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <div className="w-full relative ">
            <img
              className="w-full h-full rounded-xl h-full "
              src="/images/about.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:text-center xl:text-justify">
          <h1 className="text-blue-400 font-bold">ABOUT ME 😉</h1>
          <h2 className="text-2xl text-slate-900 font-bold sm:text-center md:text-start">
            A dedicated Front-end Developer based in Rizal, Philippines 📍
          </h2>
          <p className=" opacity-60">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, DaisyUI and Figma for Web Design Prototype. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
};
