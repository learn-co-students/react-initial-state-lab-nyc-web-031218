import React from 'react'

class Bomb extends React.Component {
  state = {
    secondsLeft: this.props.initialCount
  }

  output = () => {
    if (this.state.secondsLeft > 0){
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return <div>Boom!</div>
    }
  }


  render (){
    return (
      <div>
        {this.output()}
      </div>
    )
  }
}



export default Bomb
