import React, { Component } from "react";
import "../App.css";

export class category extends Component {
  render() {
    return (
      <div>
        <select name="dog-names" id="dog-names">
          <option value="Filter by Category" selected>
            Filter by Category
          </option>
          <option value="rigatoni">1</option>
          <option value="dave">2</option>
          <option value="pumpernickel">3</option>
          <option value="reeses">4</option>
        </select>
      </div>
    );
  }
}

export default category;
