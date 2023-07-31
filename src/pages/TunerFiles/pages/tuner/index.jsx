import React, { Component } from "react";
import "../../utils/note-analyzer";
import { connect } from "react-redux";
import "./Tuner.css"; // Import the CSS file

import RangeBar from "../../components/RangeBar";

class Tuner extends Component {
  state = {
    standardTune: {
      e: 82.41,
      a: 110.00,
      d: 146.83,
      g: 196.00,
      b: 246.94,
      E: 329.63
    },
    stringTuneStatus: {
      e: false,
      a: false,
      d: false,
      g: false,
      b: false,
      E: false
    }
  };

  isStandardTuneForString = (string) => {
    const { currentNote } = this.props;
    const { standardTune } = this.state;

    if (
      currentNote[string] &&
      -5 <= currentNote[string].cents &&
      currentNote[string].cents <= 5 &&
      Math.abs(currentNote[string].freq - standardTune[string]) < 0.1
    ) {
      return true;
    }

    return false;
  };

  resetCheckboxes = () => {
    this.setState({
      stringTuneStatus: {
        e: false,
        a: false,
        d: false,
        g: false,
        b: false,
        E: false
      }
    });
  };

  render() {
      const { freq, cents, noteName, octave } = this.props.currentNote;
    const { stringTuneStatus } = this.state;
    return (
      <div className="container_tuner">
        <div className={`resultContainer ${this.isStandardTuneForString("e") ? "tuned" : ""}`}>
          <span className="noteName">
            {noteName}
            <span className="octave">{octave}</span>
          </span>
          <span className="cents">{cents}</span>
          <span className="frequency">{Math.round(freq)} Hz</span>
        </div>

        <RangeBar value={cents}></RangeBar>

    

        <div className="checkboxWrapper">
          <label className={`checkboxLabel ${this.isStandardTuneForString("e") ? "tuned" : ""}`}>e</label>
          <label className={`checkboxLabel ${this.isStandardTuneForString("a") ? "tuned" : ""}`}>a</label>
          <label className={`checkboxLabel ${this.isStandardTuneForString("d") ? "tuned" : ""}`}>d</label>
          <label className={`checkboxLabel ${this.isStandardTuneForString("g") ? "tuned" : ""}`}>g</label>
          <label className={`checkboxLabel ${this.isStandardTuneForString("b") ? "tuned" : ""}`}>b</label>
          <label className={`checkboxLabel ${this.isStandardTuneForString("E") ? "tuned" : ""}`}>E</label>
        </div>

        <button className="button_reset" onClick={this.resetCheckboxes}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currentNote: store.noteReducer.currentNote,
});

export default connect(mapStateToProps)(Tuner);