// Bomb Component Code Goes Here
import React from 'react';

class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSliderIndex: 0
    }
  }

  render() {
    return(
      <div>
        I am on slide {this.state.currentSliderIndex}
      </div>
    )
  }
}

export default ImageSlider;
