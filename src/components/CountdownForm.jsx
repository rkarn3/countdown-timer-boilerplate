import React from 'react';
import Countdown from './Countdown';

class CountdownForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(e) {
    //This will give you string for seconds. Do not remove refs
    e.preventDefault();
    var secondsStr = this.refs.seconds.value;
    this.props.onSetCountdownTime(secondsStr);
    this.refs.value = '';
  }

  render() {
    let { onSetCountdownTime } = this.props;
    return (
      <div>
        <form
          ref="form"
          onSubmit={this.onSubmit.bind(this)}
          className="countdown-form"
        >
          <input
            type="text"
            ref="seconds"
            placeholder="Enter time in seconds"
          />
          <input
            type="submit"
            className="button success expanded"
            value="Start Countdown"
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
