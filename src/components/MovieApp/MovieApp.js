import React from "react";
import MovieHeader from "./MovieHeader";
import MovieBody from "./MovieBody";
import MovieSearch from "./MovieSearch";

class MovieApp extends React.Component {
  state = {
    inputText: "",
    showInfo: false,
    isLoaded: false,
    defaultMovies: [],
    defaultText: ["iron man", "super man", "evil", "wall"],
    defaultFunction: () => {
      return Math.floor(Math.random() * this.state.defaultText.length);
    },
    movies: [],
  };
  // default data to display before user enter data
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a67d0ff54b82c33be57851e07b2512a3&language=en-US&query=${
        this.state.defaultText[this.state.defaultFunction()]
      }&page=1&include_adult=false`
    )
      .then((data) => data.json())
      .then((results) =>
        this.setState({ defaultMovies: results.results, isLoaded: false })
      );
    //console.log(this.props);
  }

  // get input text from user
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
    e.target.text = e.target.value;
    //console.log(this.state.inputText);
  };

  // this will get the data from the API using user input.
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a67d0ff54b82c33be57851e07b2512a3&language=en-US&query=${this.state.inputText}&page=1&include_adult=false`
    )
      .then((data) => data.json())
      .then((results) =>
        this.setState({ movies: results.results, isLoaded: true })
      );
  };

  render() {
    //console.log(this.state.defaultFunction());
    return (
      <div className="movieApp">
        <MovieHeader />
        <MovieSearch
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieBody
          movies={this.state.movies}
          showInfo={this.state.showInfo}
          isLoaded={this.state.isLoaded}
          handleClick={this.handleClick}
          defaultMovies={this.state.defaultMovies}
        />
      </div>
    );
  }
}

export default MovieApp;
