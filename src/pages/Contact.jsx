import React, { useContext } from "react";
import { ToggleContext } from "../Hooks/ThemeContext";

export const Contact = () => {

  const {isToggle} = useContext(ToggleContext)
  return (
    <section id="contact" className={`${isToggle ? "bg-slate-800 text-white" : ""} relative py-10 `}>
      <div className="absolute w-[150px] top-0 sm:right-0 xl:right-20">
        <img className="w-full h-full object-cover" src="/images/3dimage.png" />
      </div>
      
      <div className="m-auto sm:w-[90%] md:w-[60%]">
        <h1 className="text-blue-400 font-bold uppercase">Contact </h1>
        <p className=" text-2xl font-bold tracking-widest">
          Hit me up !👇
        </p>

        <div className="mt-5">
          <div className=" md:flex items-center justify-between gap-5">
            {/* Location */}
            <div className="p-5 bg-white text-slate-900 rounded-full shadow-mmd border-t border-l border-slate-900 flex items-center gap-1">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/location.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p>Rodriguez Rizal, Philippines</p>
              </div>
            </div>
            {/* Email */}
            <div className="p-5 bg-white text-slate-900 rounded-full shadow-mmd border-t border-l border-slate-900 flex items-center gap-1 sm:mt-5 md:mt-0 ">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/email.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className=" text-blue-600 whitespace-normal">riejanevangelista1620@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
