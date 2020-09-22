import React from "react";
import ReviewBody from "./ReviewBody.js";

class Reviews extends React.Component {
  state = {
    reviews: [
      {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    ],
    initial: 0,
  };

  render() {
    // Handle the click functions
    const handleClickForward = () => {
      //console.log(i);
      let initial = this.state.initial;
      initial += 1;
      //console.log(initial);
      this.setState({
        initial: initial,
      });
      if (initial >= 4) {
        this.setState({
          initial: 0,
        });
      }
    };

    const handleClickBackward = () => {
      //console.log(i);
      let initial = this.state.initial;
      initial -= 1;
      //console.log(initial);
      this.setState({
        initial: initial,
      });
      if (initial < 0) {
        this.setState({
          initial: 3,
        });
      }
    };

    const handleSupriseMe = () => {
      const getlength = this.state.reviews.length;
      let getRandom = Math.floor(Math.random(getlength) * 4);
      this.setState({
        initial: getRandom,
      });
    };

    return (
      <ReviewBody
        state={this.state}
        getFunction={[handleClickBackward, handleClickForward, handleSupriseMe]}
      />
    );
  }
}

export default Reviews;
