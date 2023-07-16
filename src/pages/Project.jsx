import React from "react";

export const Projects = () => {
  return (
    <section id="projects" className="xl:h-full py-20 bg-zinc-100">
      <div className="m-auto sm:w-[90%] md:w-[60%]">
        <h1 className="text-md font-bold text-blue-500 uppercase">Projects</h1>
        <h2 className="text-2xl font-bold text-slate-900 mt-5">
          Each Project has a unique piece of development 🧩
        </h2>
        {/* First Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="https://wayfarer-beta.vercel.app/" target="_blank">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd"
                  src="/images/proj1.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              Booking Website 📖
            </h1>
            <p className="text-center text-gray-500">
              Booking Website Landing Page. The website provides an interface
              for searching and viewing places around the world especially
              Philippines .
            </p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md">React</span>
              <span className="shadow-mmd px-5 py-2 rounded-md">Tailwind</span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/Wayfarer"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://wayfarer-beta.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 2nd Project */}

        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="https://todo-app-five-opal.vercel.app/" target="_blank">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd"
                  src="/images/proj2.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              Todo App 🖊️
            </h1>
            <p className="text-center text-gray-500">
            The todo app developed with React.js and local storage provides a streamlined and intuitive user experience for task management. 
            With the help of React.js, the app offers real-time updates and a responsive interface, ensuring smooth task organization. 
            By utilizing local storage, 
            tasks are securely stored in the user's browser, allowing for persistence and easy access to tasks across sessions.
            </p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md">React</span>
              <span className="shadow-mmd px-5 py-2 rounded-md">Tailwind</span>
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
        {/* 3rd Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex  items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="" target="_blank">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd"
                  src="/images/proj2.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              Booking Website 📖
            </h1>
            <p className="text-center text-gray-500">
              Booking Website Landing Page. The website provides an interface
              for searching and viewing places around the world especially
              Philippines .
            </p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md">React</span>
              <span className="shadow-mmd px-5 py-2 rounded-md">Tailwind</span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/Wayfarer"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://wayfarer-beta.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        {/* 4th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="" target="_blank">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd"
                  src="/images/proj2.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              Booking Website 📖
            </h1>
            <p className="text-center text-gray-500">
              Booking Website Landing Page. The website provides an interface
              for searching and viewing places around the world especially
              Philippines .
            </p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md">React</span>
              <span className="shadow-mmd px-5 py-2 rounded-md">Tailwind</span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/RieEvans/Wayfarer"
                target="_blank">
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2 "
                href="https://wayfarer-beta.vercel.app/"
                target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
