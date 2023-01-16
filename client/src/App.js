import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import React from "react";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
