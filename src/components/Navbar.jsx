import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ toShow }) => {
  const handleClickNav = (scrollTold) => {
    document.getElementById(scrollTold).scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const threshold = 10;

  //     if (scrollY > threshold) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <div
        onMouseEnter={() => setShowNavbar(true)}
        onMouseLeave={() => setShowNavbar(false)}
        className="fixed z-20 w-screen h-16 opacity-0 "
      ></div> */}

      <div
        className={`w-full fixed flex justify-between backdrop-blur-lg bg-bg bg-opacity-40 gap-7 z-20 text-sm px-20 text-slate-300 border-b-2  border-slate-300 border-opacity-50 font-medium font-montserrat  `}
      >
        <h1 className="font-black text-base  py-3">SOBIN JOHNSON</h1>
        <ul className="flex justify-between gap-7 py-3 ">
          {/* <a
            className="md:flex hidden"
            onClick={() => handleClickNav("aboutus")}
          >
            About Me
          </a> */}
          <li
            onClick={() => handleClickNav("home")}
            className="md:flex hidden  "
          >
            Home
          </li>
          {/* <a className="md:hidden flex border-b-2 border-primary" onClick={(prev)=>(setshowMenu(!prev))}>Menu</a> */}
          <li
            onClick={() => handleClickNav("contactus")}
            className="md:flex hidden"
          >
            Contact Me
          </li>
          <li
            // href="https://linktr.ee/lighthouse_labs"
            className="md:flex hidden"
          >
            Works
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
