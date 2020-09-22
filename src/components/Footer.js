import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // get the Date inbuilt function
  let d = new Date();

  window.onscroll = () => {
    // for the back-to-top button
    const getLink = document.querySelector(".top-link");
    if (window.pageYOffset > 800) {
      getLink.classList.add("show-link");
    } else {
      getLink.classList.remove("show-link");
    }
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
    const getLink = document.querySelector(".top-link");
    getLink.classList.remove("show-link");
    if (window.pageYOffset > 800) {
      getLink.classList.add("show-link");
    }
  };

  return (
    <React.Fragment>
      <Link to="#" className="top-link scroll-link" onClick={handleScroll}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Link>
      <footer className="section">
        <p>
          copyright <FontAwesomeIcon icon={faCopyright} /> {d.getFullYear()}{" "}
          {d.getMonth()}
          {"/"}
          {d.getUTCDate()} MichaelOnyebuchiOhaya. All Rights Reserved.
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
