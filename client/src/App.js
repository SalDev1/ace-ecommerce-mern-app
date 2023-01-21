import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import React, { useEffect } from "react";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userActions";
import UserOptions from "./components/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenicated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />

      {isAuthenicated && <UserOptions user={user} />}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ProductDetails} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:keyword' component={Products} />

        <Route exact path='/search' component={Search} />
        <Route exact path='/login' component={LoginSignUp} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
