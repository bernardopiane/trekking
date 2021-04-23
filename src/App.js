import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import CartDisplay from "./components/CartDisplay";
import Filter from "./components/Filter";
import FilteredItems from "./components/FilteredItems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TwitterBar from "./components/TwitterBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Filter />
          <FilteredItems />
          <AboutUs />
          <TwitterBar />
          <Footer />
        </Route>

        <Route path="/cart">
          <Navbar hasBG="black" />
          <CartDisplay />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
