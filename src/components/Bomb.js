import React from 'react';

export default class Bomb extends React.Component{

  state = {
    secondsLeft: this.props.initialCount
  }

bomb(){
  if(this.state.secondsLeft === 0){
    return "Boom!"
  } else{
    return `${this.state.secondsLeft} seconds left before I go boom!`
  }
}
  render(){

    return(
        <div>
          <h1>{this.bomb()}</h1>
        </div>
    )
  }

}
