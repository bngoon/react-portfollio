import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Resume from "./components/resume/Resume.jsx";
// import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects.jsx";
import React from "react";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        {/* <Portfolio /> */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
