import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="px-20 h-dvh flex flex-col justify-center items-center text-slate-200">
      <div className=" w-full  z-10 text-center">
        <h1 className=" font-montserrat text-base text-primary font-semibold    uppercase opacity-75 pt-4">
          pick your poison
        </h1>
        <h1 className=" font-montserrat text-7xl font-black">
          I have two sides
        </h1>
        {/* <p className="max-w-lg pt-2">
          A full-stack developer with a passion for creating beautiful and
          functional web applications.
        </p> */}
        <div className=" pt-14 w-full flex justify-center">
          <div className="grid grid-cols-2 max-w-2xl gap-12 mt-8 text-center">
            {" "}
            <div class="card">
              <h4>DEVOLOPER</h4>

              <div class="shine"></div>
              <div class="background">
                <div class="tiles">
                  <div class="tile tile-1"></div>
                  <div class="tile tile-2"></div>
                  <div class="tile tile-3"></div>
                  <div class="tile tile-4"></div>

                  <div class="tile tile-5"></div>
                  <div class="tile tile-6"></div>
                  <div class="tile tile-7"></div>
                  <div class="tile tile-8"></div>

                  <div class="tile tile-9"></div>
                  <div class="tile tile-10"></div>
                </div>

                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
              </div>
            </div>
            <div class="card">
              <h4 className="">DESIGNER</h4>

              <div class="shine"></div>
              <div class="background">
                <div class="tiles">
                  <div class="tile tile-1"></div>
                  <div class="tile tile-2"></div>
                  <div class="tile tile-3"></div>
                  <div class="tile tile-4"></div>

                  <div class="tile tile-5"></div>
                  <div class="tile tile-6"></div>
                  <div class="tile tile-7"></div>
                  <div class="tile tile-8"></div>

                  <div class="tile tile-9"></div>
                  <div class="tile tile-10"></div>
                </div>

                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Project;
