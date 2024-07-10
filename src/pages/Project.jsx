import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="px-20 h-dvh flex flex-col justify-center items-center text-slate-200">
      <div className=" w-full  z-10 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* <div className="h-0.5 seperator w-1/2"></div> */}
          <h1 className=" font-montserrat text-sm pt-16 text-primary font-semibold    uppercase opacity-75 ">
            pick your poison
          </h1>
          <h1 className=" font-montserrat text-6xl font-black">
            I have two sides
          </h1>
          <p className=" opacity-50 pt-4 max-w-sm">
            They say being a jack of all trades is a bad thing, but trust me I
            am really good at both.
          </p>
        </div>
        {/* <p className="max-w-lg pt-2">
          A full-stack developer with a passion for creating beautiful and
          functional web applications.
        </p> */}
        <div className="flex justify-center">
          <div className=" pt-14 max-w-[52rem] w-full flex gap-28 font-montserrat">
            <div class="card h-fit transition-all">
              <div class="card-content">
                <h3 className="font-bold">A nerdy</h3>
                <h1 className="pt-0">Developer</h1>
                <p className="text-sm text-left  max-w-sm pt-5">
                  A skilled software engineer with hands-on experience of
                  handling real world apps.
                </p>
                <p className="text-xs text-primary w-full font-medium   max-w-sm pt-5">
                  Tap to see Projects {">"}
                </p>
              </div>
            </div>
            <div class="card h-fit">
              <div class="card-content">
                <h3 className="font-bold">A creative</h3>
                <h1>Designer</h1>
                <p className="text-sm  max-w-sm pt-5">
                  A passionate creative artist turned designer with a keen
                  interest in visual storytelling.
                </p>
                <p className="text-xs text-primary w-full font-medium   max-w-sm pt-5">
                  Tap to see Projects {">"}
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Project;
