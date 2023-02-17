import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo.png";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <img src={logo}></img>
        </ul>
      </nav>
    );
  }
}

export default Nav;
