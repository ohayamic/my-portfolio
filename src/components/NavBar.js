import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  // add toggle property to the button
  const handleClick = () => {
    const navLinks = document.querySelector(".links-container");
    //const scrollLinks = document.querySelectorAll(".scroll-link");
    navLinks.classList.toggle("show-links");
  };

  // open the link and close the navBar button
  const handleLinks = () => {
    const navLinks = document.querySelector(".links-container");
    const scrollLinks = document.querySelectorAll(".scroll-link");
    navLinks.classList.toggle("show-links");
    scrollLinks.forEach(() => {
      navLinks.classList.remove("show-links");
    });
  };

  // add a scroll event when the page is scrolled a distance
  window.onscroll = () => {
    // for the navBar
    const navLink = document.getElementById("nav");
    if (window.pageYOffset > 75) {
      navLink.classList.add("fixed-nav");
    } else {
      navLink.classList.remove("fixed-nav");
    }
  };

  return (
    <nav id="nav">
      {/* header */}
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle nav-rotate" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <Link to="/" className="scroll-link" onClick={handleLinks}>
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="scroll-link" onClick={handleLinks}>
                about
              </Link>
            </li>
            <li>
              <Link to="/skills" className="scroll-link" onClick={handleLinks}>
                skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="scroll-link"
                onClick={handleLinks}
              >
                projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
