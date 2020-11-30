import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/home.js";
import Portfolio from "./components/pages/portfolio";
import Portfolio2 from "./components/pages/portfolio2";

class App extends Component {
  render() {
    return (

      <Router>

      <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/portfolio" exact={true} component={Portfolio} />
      <Route path="/portfolio2" exact={true} component={Portfolio2} />
      </div>

      </Router>
    );
  }
}

export default App;
