import React from "react";

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = { currentTime: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = 0;
  }

  tick() {
    this.setState({ currentTime: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="container">
          <div>
            <h1>Time</h1>
            <h1>Date</h1>
          </div>
          <div>
            <h1>
              {this.state.currentTime.getHours()}:
              {this.state.currentTime.getMinutes()}:
              {this.state.currentTime.getSeconds()} EST
            </h1>
            <h1>{this.state.currentTime.toDateString()}</h1>
          </div>
        </div>
      </div>
    );
  }
}
