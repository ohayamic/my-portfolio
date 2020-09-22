import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hex from "./components/colors/Hex";
import MainColor from "./components/colors/MainColor";
import Review from "./components/review/Reviews";
import MenuItem from "./components/menu/MenuItem";
import MovieApp from "./components/MovieApp/MovieApp";
import Error from "./components/Resort/Error";

//import Example from "./components/MovieApp/Example";

import "./App.css";
import MovieDetails from "./components/MovieApp/MovieDetails";

const App = () => {
  console.log(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/hex" component={Hex} />
          <Route exact path="/mainColor" component={MainColor} />
          <Route exact path="/reviews" component={Review} />
          <Route exact path="/menu" component={MenuItem} />
          <Route exact path="/movieApp" component={MovieApp} />
          <Route exact path="/:id" component={MovieDetails} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
