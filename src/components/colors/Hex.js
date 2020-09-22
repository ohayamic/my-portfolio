import React from "react";
//import NavBar from "./MiniNavBar";

class Hex extends React.Component {
  state = {
    // initialise the hex values
    text: "#f1f5f8",
    hex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
  };

  handleClick = () => {
    let newHex = "";
    for (let i = 0; i < 6; i++) {
      const getRandom = this.getRandom(this.state.hex.length);
      newHex += this.state.hex[getRandom];
    }
    // change the text in the h2 element
    this.setState({ text: `#${newHex}` });

    // change the background color
    document.body.style.background = `#${newHex}`;
  };

  // define a random number
  getRandom = (value) => {
    return Math.floor(Math.random(value) * 12);
  };

  render() {
    return (
      <div className="hex-main">
        <div className="hex-container">
          <h1>Hex Page</h1>
          <h2>
            background color :
            <span className="hex-color">{this.state.text}</span>
          </h2>
          <button
            className="btn hex-btn"
            data-id="main"
            onClick={this.handleClick}
          >
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default Hex;
