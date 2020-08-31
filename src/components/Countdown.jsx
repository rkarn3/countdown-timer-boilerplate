import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onSetCountdownTime = this.onSetCountdownTime.bind(this);
  }

  onSetCountdownTime = (count) => {
    this.setState({
      count: count,
    });
  };

  render() {
    return (
      <div>
        {this.state.count !== 0 ? (
          <Clock timeInSeconds={this.state.count} />
        ) : (
          <h1>00:00</h1>
        )}
        <CountdownForm onSetCountdownTime={this.onSetCountdownTime} />
      </div>
    );
  }
}

export default Countdown;
