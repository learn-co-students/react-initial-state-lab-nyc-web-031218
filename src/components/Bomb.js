import React from 'react';

export default class Bomb extends React.Component{
  constructor(props){
    super();

    this.state = {
      secondsLeft: parseInt(`${props.initialCount}`)
    }
  }

  render(){

    if(this.state.secondsLeft) {
      return(
        <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      )
    } else {
      return(
        <p>Boom!</p>
      )
    }
  }

}
