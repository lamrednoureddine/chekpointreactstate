import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor() {
    super();
    this.state = {
      intervalId: null,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    // Start a timer when the component is mounted
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000); // Update the elapsed time every 1 second

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <p>Time since component was mounted: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default TimerComponent;
