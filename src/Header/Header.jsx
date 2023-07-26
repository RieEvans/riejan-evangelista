import React, { useEffect, useRef, useState } from "react";

export const Header = () => {
  
  const menuRef = useRef();
  const [toggle , setToggle] = useState(false)

  useEffect((e) => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setToggle(false)
      }
    }
    document.addEventListener("mouseover", handler)
    return () => {
      document.removeEventListener("mouseover", handler)
    }
  })
  return (
    <div className="">
      <header className="fixed top-0 bg-white shadow-md w-full z-50">
        <div className="flex items-center justify-between sm:px-5 md:px-20 py-5 ">
          <a href="#home" className="font-bold text-slate-900 text-2xl">Riejan.dev ⚙️</a>
          <nav className="md:flex items-center justify-between sm:hidden  gap-5 text-slate-900 font-semibold">
          <a href="#home">
            <i className="fa-solid fa-house-user"></i> Home
          </a>
          <a href="#about">
            <i className="fa-regular fa-address-card"></i> About
          </a>
          <a href="#projects">
            <i className="fa-solid fa-list-check"></i> Projects
          </a>
          <a href="#contact">
            <i className="fa-solid fa-house-user"></i> Contact
          </a>
          </nav>

          <div onClick={() => setToggle(!toggle)} className={`sm:block md:hidden text-2xl cursor-pointer`}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <nav ref={menuRef} className={`${toggle ? 'translate-x-0' : 'translate-x-[1000px]'}  md:hidden  absolute rounded-bl-[3rem] rounded-tl-[3rem] right-0 transition border-r-4 border-slate-900 bg-slate-900 text-white  flex-col flex p-16 gap-5 font-bold focus:bg-slate-900 focus:text-white`}>
          <a href="#home" >
            <i className="fa-solid fa-house-user"></i> Home
          </a>
          <a href="#about">
            <i className="fa-regular fa-address-card"></i> About
          </a>
          <a href="#projects">
            <i className="fa-solid fa-list-check"></i> Projects
          </a>
          <a href="#contact">
            <i className="fa-solid fa-house-user"></i> Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
