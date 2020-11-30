import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/home.js";
import Portfolio from "./components/pages/portfolio";

class App extends Component {
  render() {
    return (

      <Router>

      <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/portfolio" exact={true} component={Portfolio} />
      </div>

      </Router>
    );
  }
}

export default App;
