// Bomb Component Code Goes Here
import React from 'react';


class ImageSlider extends React.Component{
  constructor(){
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render(){
    console.log("hello")
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}

export default ImageSlider

// 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.

// render() {
//   return (
//     <button className="toggle-button">
//       I am toggled {this.state.isEnabled ? 'on' : 'off'}
//     </button>
