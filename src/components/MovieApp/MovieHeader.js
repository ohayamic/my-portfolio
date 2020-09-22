import React from "react";
import Movie from "../../images/undraw_movie.svg";

function MovieHeader() {
  return (
    <div className="movieHeader">
      <h1 style={{ textAlign: "center" }}>
        MovieApp <span style={{ color: "#49a6e9" }}>Project</span>
      </h1>
      <img src={Movie} alt="movie icon" />
    </div>
  );
}

export default MovieHeader;
