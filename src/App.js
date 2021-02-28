import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Payment from "./Payment";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  //doubt about USEEFFECT
  //doubt about listener in react
  //doubt about the React CONTEXT API (MAJOR*****)

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The User Is >>>>", authUser);
      if (authUser) {
        //the user just loogen in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment/>
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