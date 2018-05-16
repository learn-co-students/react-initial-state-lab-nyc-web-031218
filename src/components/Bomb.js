// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {

  constructor(props) {
    super(props)
  }
  state = {
    secondsLeft: this.props.initialCount
  }

  boom() {
    if (this.state.secondsLeft > 0) {
    return `${this.state.secondsLeft} seconds left before I go boom!`
  } else {
      return 'Boom!'
    }
  }
  render() {
    return (
      <div>
        {this.boom()}
      </div>
    )
  }
}
