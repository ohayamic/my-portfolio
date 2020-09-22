import React from "react";
import MovieHeader from "./MovieHeader";
import Image from "../../images/undraw_images.svg";

//import { useParams } from "react-router-dom";

class MovieDetails extends React.Component {
  state = {
    movie: [],
    videos: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a67d0ff54b82c33be57851e07b2512a3&language=en-US&append_to_response=videos`
    )
      .then((data) => data.json())
      .then((results) =>
        this.setState({ movie: results, videos: results.videos.results })
      );
    //console.log(this.props);
  }
  render() {
    console.log(this.state.videos);
    return (
      <>
        <MovieHeader />
        <div className="MB_detailWrapper">
          <div className="MB_textTitle">
            <h2 style={{ fontSize: "22px", marginTop: "25px" }}>
              {this.state.movie.title}
            </h2>
            <p>{this.state.movie.overview}</p>
          </div>

          <div className="secondDiv">
            <img
              className="MB_imgWrapper"
              src={
                this.state.movie.poster_path === null
                  ? Image
                  : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.state.movie.poster_path}`
              }
              alt="backdrop_path"
            />
          </div>
          <div className="MB_videoWrapper">
            <h3>
              Movie <span>Videos</span>
            </h3>
            <div>
              {this.state.videos.map((video) => {
                return <small key={video.key}>{video.name}</small>;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MovieDetails;
