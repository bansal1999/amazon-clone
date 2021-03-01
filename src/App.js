import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Payment from "./Payment";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IPiHEGeZc4pvph85MNs9SgszxXc2emk4ON0fNfrOAeQdcmutTAs5g6YBwwc6fO9wlhSl2EtLEeRpHqLabQLhcwJ000CPhZtHV"
);

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
        <Switch>
          {/* rectify the "/" issue with "/home" ##DOUBT */}
          <Route path="/orders">
            <Orders />
            <Header />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
