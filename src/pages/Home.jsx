import React from "react";


export const Home = () => {
  return (
    <section id="home" className="xl:h-screen sm:py-20 bg-zinc-100 flex items-center justify-center  ">
      <div className="m-auto sm:w-[90%] md:w-[60%] flex sm:flex-col-reverse xl:flex-row gap-5">
        <div>
          <h1 className="relative  xl:text-5xl sm:text-[30px] md:text-6xl  sm:text-center xl:text-start tracking-wide font-bold text-gray-800">
           Jr. Front-End Developer <span className="absolute">👋🏻</span>
          </h1>
          <p className="sm:text-center xl:text-start text-gray-800 tracking-wide text-[16px] sm:mt-0 md:mt-10 leading-6">
            Hi, I'm Riejan Evangelista, Aspiring to be a Front End Developer
            based in Rizal, Philippines 📍
          </p>
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
          <div className="teck-stack  flex sm:flex-col xl:flex-row items-center justify-between gap-2 xl:mt-0 sm:mt-10 ">
                <p className="border-r border-slate-900 pr-5 text-slate-900 font-semibold">Tech Stack</p>
                <div className="tech-icons  transition grid sm:grid-cols-3 content-center justify-content-center xl:grid-cols-6 gap-5 xl:mt-0 sm:mt-0">
                    
                  <div className="w-[60px] bg-white shadow-xl rounded-full  p-4 cursor-pointer "><img className="w-full h-full object-cover" src="images/html.png" alt="" /></div>  
                  <div className="w-[60px] bg-white shadow-xl rounded-full  p-4 cursor-pointer "><img className="w-full h-full object-cover" src="images/css.png" alt="" /></div>  
                  <div className="w-[60px] bg-white shadow-xl rounded-full  p-4 cursor-pointer "><img className="w-full h-full object-cover" src="images/js.png" alt="" /></div>  
                  <div className="w-[60px] bg-white shadow-xl rounded-full  p-4 cursor-pointer "><img className="w-full h-full object-cover" src="images/react.png" alt="" /></div>  
                  <div className="w-[60px] bg-white shadow-xl rounded-full  p-4 cursor-pointer "><img className="w-full h-full object-cover" src="images/tailwind.png" alt="" /></div>  
                </div>
          </div>
          
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-full sm:w-[300px] xl:w-[300px]  relative">
            
            <img
              className="profile w-full border-2 border-slate-900 z-50 h-full object-cover"
              src="/profile.jpg"
              alt=""
            />
            
          </div>
        </div>
        
      </div>
      
    </section>
  );
};
