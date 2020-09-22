import React from "react";
//import NavBar from './NavBar'

class MainColor extends React.Component {
  state = {
    text: "#f1f5f8",
    colors: ["green", "red", "purple", "#f15025"],
  };

  // change the page background by randomising the state
  handleClick = () => {
    const randomNum = this.getRandom(this.state.colors.length);
    const value = this.state.colors[randomNum];
    this.setState({ text: value });

    document.body.style.background = this.state.colors[randomNum];
  };

  // Get random values
  getRandom = (value) => {
    return Math.floor(Math.random(value) * 4);
  };
  render() {
    return (
      <div className="hex-main">
        <div className="hex-container">
          <h1>Simple Page</h1>
          <h2>
            background color :<span className="color">{this.state.text}</span>
          </h2>
          <button className="btn hex-btn" id="main" onClick={this.handleClick}>
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default MainColor;
