import React, { Component } from "react";
import "./stopwatch.css";
import ms from "pretty-ms";
import humanizeDuration from "humanize-duration";
import Watch from "../img/stopwatch.png";
import Button from "../img/button.png";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
      times: [],
      key: 1
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.splitTime = this.splitTime.bind(this);
  }

  startTimer() {
    if (!this.state.isOn) {
      this.setState({
        start: Date.now() - this.state.time
      });

      this.setState({ isOn: true });

      this.timer = setInterval(
        () =>
          this.setState({
            time: Date.now() - this.state.start
          }),
        10
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  splitTime() {
    if (this.state.isOn) {
      this.setState({
        key: this.state.key + 1
      });

      this.setState(prevState => ({
        times: [
          { lapTime: this.state.time, key: this.state.key },
          ...prevState.times
        ]
      }));
    }
  }

  resetTimer() {
    if (!this.state.isOn) {
      this.setState({
        isOn: false,
        time: 0,
        start: 0,
        key: 1,
        times: []
      });
    }
  }

  render() {
    const textHumanizer = humanizeDuration.humanizer({
      language: "shortEn",
      languages: {
        shortEn: {
          h: () => "H",
          m: () => "M",
          s: () => "",
          ms: () => ""
        }
      }
    });

    const lapTimes = this.state.times.map(number => (
      <li key={number.key}>
        {number.key}: {textHumanizer(number.lapTime)}
      </li>
    ));

    return (
      <div className="stopwatch">
        <img id="watch" src={Watch} alt="stopwatch" />
        <div className='watchBackground'>
          {this.state.time === 0 ? (
            <h2>0</h2>
          ) : (
            <h2> {textHumanizer(this.state.time, { maxDecimalPoints: 2 })} </h2>
          )}
        </div>
        <div>
          {this.state.isOn ? (
            <img
              src={Button}
              alt="stap/start button"
              className="stopTime"
              onClick={this.stopTimer}
            />
          ) : (
            <img
              src={Button}
              alt="stap/start button"
              className="startTime"
              onClick={this.startTimer}
            />
          )}

          <img
            src={Button}
            alt="lap time button"
            className="lapTime"
            onClick={this.splitTime}
          />
          <img
            src={Button}
            alt="reset button"
            className="resetTime"
            onClick={this.resetTimer}
          />

          <ul>{lapTimes}</ul>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
