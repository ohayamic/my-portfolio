import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
//import giphy from "../../images/giphy.gif";
import Image from "../../images/undraw_images.svg";

const MovieBody = (props) => {
  // Get the elements for manipulation
  //const getMovies = [...props.movies];
  // map through the getMovies list and extract details from it

  const displayMovies = props.isLoaded
    ? props.movies.map((displayMovie) => {
        return (
          <div key={displayMovie.id} className="MBContainer">
            <div className="MBTitle">
              <h2
                className="MB_heading"
                // check if the length of title is bigger than 18 and display appropriately
              >
                {/*  */}
                {displayMovie.title.length >= 18
                  ? `${displayMovie.title.slice(0, 15)} ...`
                  : displayMovie.title}
              </h2>
            </div>
            <div className="imgContainer">
              <img
                className="MB_img"
                //check if the image exist or not and display appropriately
                src={
                  displayMovie.poster_path === null
                    ? Image
                    : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${displayMovie.poster_path}`
                }
                alt="movie"
              />
            </div>
            <div className="MBDetails">
              <div
              // check if overview is length is bigger than 150 and display appropriately
              //style={{ height: "65px", overflow: "hidden" }
              >
                {props.showInfo === false
                  ? `${displayMovie.overview.slice(0, 150)} .....`
                  : displayMovie.overview}
              </div>

              <div className="MB_otherDetails">
                <p>
                  <FontAwesomeIcon icon={faCalendarDay} /> : <span></span>
                  {displayMovie.release_date}
                </p>

                <Link to={`/${displayMovie.id}`} className="btn MB_link">
                  Detailed View
                </Link>
              </div>
            </div>
          </div>
        );
      })
    : props.defaultMovies.map((displayMovie) => {
        return (
          <div key={displayMovie.id} className="MBContainer">
            <div className="MBTitle">
              <h2
                className="MB_heading"
                // check if the length of title is bigger than 18 and display appropriately
              >
                {displayMovie.title.length >= 18
                  ? `${displayMovie.title.slice(0, 15)} ...`
                  : displayMovie.title}
              </h2>
            </div>
            <div className="imgContainer">
              <img
                className="MB_img"
                //check if the image exist or not and display appropriately
                src={
                  displayMovie.poster_path === null
                    ? Image
                    : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${displayMovie.poster_path}`
                }
                alt="movie"
              />
            </div>
            <div className="MBDetails">
              <div
              // check if overview is length is bigger than 150 and display appropriately
              //style={{ height: "65px", overflow: "hidden" }}
              >
                {displayMovie.overview.slice(0, 180)} ...
              </div>

              <div className="MB_otherDetails">
                <p>
                  <FontAwesomeIcon icon={faCalendarDay} /> : <span></span>
                  {displayMovie.release_date}
                </p>

                <Link to={`/${displayMovie.id}`} className="btn MB_link">
                  Detailed View
                </Link>
              </div>
            </div>
          </div>
        );
      });
  // Displays the content of the list

  return <>{displayMovies}</>;
};

export default MovieBody;
