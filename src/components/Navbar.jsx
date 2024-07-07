import React, { useEffect, useState } from "react";

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
        className={`w-full fixed flex justify-between  gap-7 z-20 text-sm px-20 text-slate-300 border-b-2  border-slate-300 font-medium font-montserrat  `}
      >
        <h1 className="font-black text-base  py-3">SOBIN JOHNSON</h1>
        <div className="flex justify-between gap-7 py-3">
          <a
            className="md:flex hidden"
            onClick={() => handleClickNav("aboutus")}
          >
            About Us
          </a>
          <a
            onClick={() => handleClickNav("home")}
            className="md:flex hidden  "
          >
            Home
          </a>
          {/* <a className="md:hidden flex border-b-2 border-primary" onClick={(prev)=>(setshowMenu(!prev))}>Menu</a> */}
          <a
            onClick={() => handleClickNav("contactus")}
            className="md:flex hidden"
          >
            Contact Us
          </a>
          <a
            href="https://linktr.ee/lighthouse_labs"
            className="md:flex hidden"
          >
            Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
