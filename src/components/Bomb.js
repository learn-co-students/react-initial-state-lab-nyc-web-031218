// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {
    // const message =
    return (
      <p>{this.state.secondsLeft === 0 ? "Boom!"
        : this.state.secondsLeft + ' seconds left before I go boom!' }</p>
    )
  }
}

export default Bomb
