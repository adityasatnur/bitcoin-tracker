import React, { Component } from "react";
import Bitcoin from "./Bitcoin";

import "./homeStyles.css";

const HomeView = props => {
  return (
    <div className="home">
      <img src={require("./bitcoin.png")} alt="" />
      <Bitcoin></Bitcoin>
    </div>
  );
};

export default HomeView;
