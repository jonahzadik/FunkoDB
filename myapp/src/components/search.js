import React, { Component } from "react";
import "../App.css";
import searchimg from "../assets/search2.png";

export class search extends Component {
  render() {
    return (
      <div id="searchdiv">
        <input placeholder="Search all funko's"></input>
        <img src={searchimg} id="search"></img>
      </div>
    );
  }
}

export default search;
