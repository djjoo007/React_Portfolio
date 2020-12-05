import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/home.js";
import Portfolio from "./components/pages/portfolio";
import Portfolio2 from "./components/pages/portfolio2";
import Portfolio3 from "./components/pages/portfolio3";
import Portfolio4 from "./components/pages/portfolio4";

class App extends Component {
  render() {
    return (

      <Router>

      <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/portfolio" exact={true} component={Portfolio} />
      <Route path="/portfolio2" exact={true} component={Portfolio2} />
      <Route path="/portfolio3" exact={true} component={Portfolio3} />
      <Route path="/portfolio4" exact={true} component={Portfolio4} />
      </div>

      </Router>
    );
  }
}

export default App;
