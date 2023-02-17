import React, { Component } from "react";
import "../App.css";
import Popup from "reactjs-popup";
import ViewInfo from "./viewinfo";

export class funkoitem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="funkobox" key={this.props.key}>
        <img src={this.props.image}></img>
        <h1>{this.props.name}</h1>
        <ViewInfo
          img={this.props.image}
          name={this.props.name}
          series={this.props.series}
          fullname={this.props.fullname}
        />
      </div>
    );
  }
}

export default funkoitem;
