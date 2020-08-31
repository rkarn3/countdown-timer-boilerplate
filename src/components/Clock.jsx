import React from 'react';
import Countdown from './Countdown';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    var { timeInSeconds } = this.props;
    this.state = {
      seconds: timeInSeconds,
    };
  }
  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds - 1,
      });
      if (this.state.seconds === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    //Keep the classes name. Try to injuect your code and do not remove existing code
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatTime(this.state.seconds)}
        </span>
      </div>
    );
  }
}
export default Clock;
