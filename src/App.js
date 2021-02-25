import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //following the BEM convention
    <Router>
      <div className="App">
        <Header />

        <switch>
          {/* rectify the "/" issue with "/home" ##DOUBT */}
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
