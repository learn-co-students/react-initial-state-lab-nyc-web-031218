// Bomb Component Code Goes Here
import React from 'react';

export default class ImageSlider extends React.Component {
  state = {
    currentSlideIndex: 0
  }

  render() {
    return (
      <button className="slider">
        I am on slide {this.state.currentSlideIndex}
      </button>
    )
  }
}
