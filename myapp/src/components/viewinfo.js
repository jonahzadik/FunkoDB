import React, { Component } from "react";
import Popup from "reactjs-popup";
import "../App.css";

export class viewinfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Popup id="popup" trigger={<button>View Funko Info</button>} modal>
        {(close) => (
          <div id="funkoinfo">
            <img src={this.props.img}></img>
            <div id="funkoinfotext">
              <h1>Name: {this.props.fullname}</h1>
              <h1>Series: {this.props.series}</h1>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default viewinfo;
