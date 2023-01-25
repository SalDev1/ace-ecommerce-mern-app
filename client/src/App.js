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
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";

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

        <ProtectedRoute exact path='/account' component={Profile} />

        <ProtectedRoute exact path='/me/update' component={UpdateProfile} />

        <ProtectedRoute
          exact
          path='/password/update'
          component={UpdatePassword}
        />
        <Route exact path='/password/forgot' component={ForgotPassword} />
        <Route exact path='/password/reset/:token' component={ResetPassword} />
        <Route exact path='/login' component={LoginSignUp} />

        <ProtectedRoute exact path='/shipping' component={Shipping} />

        <ProtectedRoute exact path='/order/confirm' component={ConfirmOrder} />
        <Route exact path='/cart' component={Cart} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
