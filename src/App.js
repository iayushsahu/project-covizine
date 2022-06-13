import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Subscribe from "./Pages/Subscribe.js";
import Aboutlm from "./Pages/aboutlm.js";
import Covidlm from "./Pages/covidlm.js";
import Blog from "./Pages/blog.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/subscribe" component={Subscribe} exact />
        <Route path="/aboutlm" component={Aboutlm} exact />
        <Route path="/covidlm" component={Covidlm} exact />
        <Route path="/blog" component={Blog} exact />
        <Route
          path="/Blogger"
          component={() => {
            window.location.href = "https://covizine.blogspot.com/";
            return null;
          }}
        />
        <Route
          path="/Blogger1"
          component={() => {
            window.location.href =
              "https://covizine.blogspot.com/2021/05/coronavirus-detected-in-wuhan-in-late.html";
            return null;
          }}
        />
        <Route
          path="/Blogger2"
          component={() => {
            window.location.href =
              "https://covizine.blogspot.com/2021/05/new-york-bans-gatherings-nonessential.html";
            return null;
          }}
        />
        <Route
          path="/Blogger3"
          component={() => {
            window.location.href =
              "https://covizine.blogspot.com/2021/05/london-put-on-covid-19-watchlist-as.html";
            return null;
          }}
        />
        <Route
          path="/Blogger4"
          component={() => {
            window.location.href =
              "https://covizine.blogspot.com/2021/05/delhi-records-6725-new-cases-of-covid.html";
            return null;
          }}
        />
        <Route
          path="/Blogger5"
          component={() => {
            window.location.href =
              "https://covizine.blogspot.com/2021/05/mumbai-city-reports-59-covid-deaths-7.html";
            return null;
          }}
        />
        <Route
          path="/Blogger6"
          component={() => {
            window.location.href =
              "https://covizine.blogspot.com/2021/05/mp-curfew-extended-in-bhopal-and.html";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
