import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../images/undraw_Hamburger.svg";
import AddColor from "../images/undraw_add_color.svg";
import Palette from "../images/undraw_palette.svg";
import Reviews from "../images/undraw_review.svg";
import Movie from "../images/undraw_movie.svg";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="title">
        <h2>
          featured <span>Projects</span>
        </h2>
      </div>
      <div className="projects">
        <div className="project project-one">
          <Link to="/menu">
            <div className="imageWrapper">
              <img src={Hamburger} alt="hamburger" className="project__img" />
            </div>
          </Link>
        </div>
        <div className="project project-two">
          <Link to="/movie">
            <div className="imageWrapper">
              <img src={Movie} alt="movie" className="project__img" />
            </div>
          </Link>
        </div>
        <div className="project project-three">
          <Link to="/reviews">
            <div className="imageWrapper">
              <img src={Reviews} alt="review" className="project__img" />
            </div>
          </Link>
        </div>
        <div className="project project-four">
          <Link to="/hex">
            <div className="imageWrapper">
              <img src={Palette} alt="palette" className="project__img" />
            </div>
          </Link>
        </div>
        <div className="project project-five">
          <Link to="/mainColor">
            <div className="imageWrapper">
              <img src={AddColor} alt="addColor" className="project__img" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
