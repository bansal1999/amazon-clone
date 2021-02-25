import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    //following the BEM convention
    <Router>
      <div className="App">
        <switch>
          {/* rectify the "/" issue with "/home" ##DOUBT */}

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
