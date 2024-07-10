import React, { useState } from "react";
import Home from "./pages/Home.jsx";
// import "./components/Background.css";
import "./App.css";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Project from "./pages/Project.jsx";

function App() {
  return (
    <div>
      {/* <div id="blob"></div>
      <div id="blur" className="w-full "></div> */}
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>
      <div className="snap-y snap-mandatory">
        <Home />
        <Project />
      </div>
    </div>
  );
}

export default App;
