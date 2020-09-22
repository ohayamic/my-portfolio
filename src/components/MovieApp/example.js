import React, { useEffect, useState } from "react";

const Example = (props) => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=a67d0ff54b82c33be57851e07b2512a3&language=en-US`
    )
      .then((data) => data.json())
      .then((res) => {
        setMovie(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
      });
    console.log();
  }, []);
  console.log(props.match);
  if (load) {
    return <ul>{error ? <li>{error.message}</li> : <li>{movie}</li>}</ul>;
  } else {
    return <div>Loading...</div>;
  }
};

export default Example;
