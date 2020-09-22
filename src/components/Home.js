import React from "react";
//import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./../components/Skills/Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <header id="home">
        <Hero />
      </header>
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
