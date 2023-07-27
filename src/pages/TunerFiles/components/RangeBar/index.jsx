import React, { Component } from "react";
import "./Rangebar.css"; // Import the CSS file

export default class RangeBar extends Component {
  render() {
    let { value } = this.props;
    if (-5 <= value && value <= 5) {
      value = 50;
    } else if (value < 0) {
      value = 50 - Math.abs(value);
    } else {
      value = value + 50;
    }

    const containerStyle = {
      width: "100%",
      background: "#000000",
    };

    return (
      <div className="container">
        <div className="progressBarContainer" style={containerStyle}>
          <div className="progressBarWave" style={{ width: `${value}%` }} />
        </div>
      </div>
    );
  }
}
