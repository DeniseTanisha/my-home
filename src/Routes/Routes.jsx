import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import GetInTouch from "../pages/getInTouch";
import MyStory from "../pages/myStory";
import WhatIDo from "../pages/whatIDo";
import Home from "../pages/Home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <GetInTouch path="getInTouch" />
        <MyStory path="myStory" />
        <WhatIDo path="whatIDo" />
      </Router>
    );
  }
}

export default Routes;
