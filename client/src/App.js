import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import register from "./components/auth/register";
import login from "./components/auth/login";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={register} />
            <Route exact path="/login" component={login} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
