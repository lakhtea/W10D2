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
        <h2>
          {this.state.currentTime.getHours()}:
          {this.state.currentTime.getMinutes()}:
          {this.state.currentTime.getSeconds()}
        </h2>
      </div>
    );
  }
}
