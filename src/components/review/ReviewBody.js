import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ReviewBody = (props) => {
  return (
    <main className="review-main">
      <section className="review-container">
        {/*<!-- title -->*/}
        <div className="review-title">
          <h2>our reviews</h2>
          <div className="review-underline"></div>
        </div>
        {/*<!-- review -->*/}
        <article
          className="review"
          key={props.state.reviews[props.state.initial].id}
        >
          <div className="review-img-container">
            <img
              src={props.state.reviews[props.state.initial].img}
              id="person-img"
              alt="person"
            />
          </div>
          <h4 id="author">{props.state.reviews[props.state.initial].name}</h4>
          <p id="job">{props.state.reviews[props.state.initial].job}</p>
          <p id="info">{props.state.reviews[props.state.initial].text}</p>
          {/*<!-- prev next buttons-->*/}
          <div className="button-container">
            <button className="review-prev-btn" onClick={props.getFunction[0]}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="review-next-btn" onClick={props.getFunction[1]}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          {/*<!-- random button -->*/}
          <button className="review-random-btn" onClick={props.getFunction[2]}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default ReviewBody;
