import React from "react";

function FilterButtons(props) {
  return (
    <div className="menu-btn-container">
      <button
        type="button"
        className="filter-btn"
        data-id="all"
        onClick={props.click}
      >
        All
      </button>
      <button
        type="button"
        className="filter-btn"
        data-id="breakfast"
        onClick={props.click}
      >
        Breakfast
      </button>
      <button
        type="button"
        className="filter-btn"
        data-id="lunch"
        onClick={props.click}
      >
        Lunch
      </button>
      <button
        type="button"
        className="filter-btn"
        data-id="shakes"
        onClick={props.click}
      >
        Desert
      </button>
    </div>
  );
}

export default FilterButtons;
