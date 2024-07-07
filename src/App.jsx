import { useState } from "react";
import Home from "./pages/Home.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
// import Project from "./pages/Project.jsx";

function App() {
  return (
    <div>
      <Background />
      <Navbar />
      {/* <Project /> */}

      <Home />
    </div>
  );
}

export default App;
