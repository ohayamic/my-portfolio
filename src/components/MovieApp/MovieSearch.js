import React from "react";

function MovieSearch(props) {
  return (
    <div className="MB_searchForm">
      <form onSubmit={props.handleSubmit}>
        <label className="label">Movie Name</label>
        <input
          type="text"
          placeholder="Enter Search Term"
          onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MovieSearch;
