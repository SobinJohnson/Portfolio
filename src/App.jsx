import { useState } from "react";
import Home from "./pages/Home.jsx";
import "./App.css";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
// import Project from "./pages/Project.jsx";

function App() {
  return (
    <div className="parent">
      <Background />
      <Navbar />
      {/* <Project /> */}

      <Home />
    </div>
  );
}

export default App;
