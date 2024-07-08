import React, { useEffect, useRef } from "react";
import bgImg from "../assets/bg.svg";
import "./Background.css"; // Assuming you have CSS for the blob

const BlobComponent = () => {
  return (
    <div className=" bg-bg">
      {/* <img
        src={bgImg}
        className="h-3/4 top-1/4 bg-blend-screen object-cover absolute -z-20 inset-0"
      ></img> */}
      <div id="blob" className="-z-10"></div>
      <div id="blur" className="z-0"></div>
    </div>
  );
};

export default BlobComponent;
