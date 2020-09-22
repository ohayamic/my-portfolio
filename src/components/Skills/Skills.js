import React from "react";
import SkillLevel from "./SkillLevel";
import SkillPercentage from "./SkillPercentage";
//import styled, { ThemeProvider } from "styled-components";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="title">
        <h2>
          My <span>skills</span>
        </h2>
      </div>
      <div className="skill-container">
        <SkillLevel />
        <SkillPercentage />
      </div>
    </section>
  );
};

export default Skills;
