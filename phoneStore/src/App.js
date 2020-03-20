import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/Home/NavBar";
import HomePage from "./components/Home/HomePage";
import ShoppingCart from "./components/Cart/ShoppingCart";
import ProductList from "./components/Product/ProductList";
import Error from "./components/Error/404Error";
import Details from "./components/Product/Details";
import ContactUs from "./components/Home/ContactUs"
import Modal from "./components/Product/Modal"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment >
       <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/productList" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/contact" component={ContactUs} />

        <Route path="/shoppingCart" component={ShoppingCart} />
        <Route component={Error} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
