import React from "react";

export const Footer = () => {
  return (
    <section className="bg-slate-900 py-10 mb-10 xl:mb-0">
      <div className="m-auto sm:w-[90%] md:w-[60%] flex items-center justify-between">
        <div className="">
          <h1 className="text-white">
            <span className="text-zinc-100 font-semibold tracking-widest">
              Portfolio:
            </span>{" "}
            Riejan Evangelista | CpE
          </h1>
          <i className="fa-brands fa-react text-blue-600 font-bold text-3xl"></i>
        </div>

        <div>
          <div className="mt-6 flex items-center sm:justify-center xl:justify-start ">
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/in/riejan-evangelista-cpe-b111b0247/"
              target="_blank">
              <i className="fa-brands fa-linkedin text-3xl "></i>
            </a>
            <a
              className="text-blue-600"
              href="https://github.com/RieEvans"
              target="_blank">
              <i className="fa-brands fa-square-github text-3xl ml-5"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
