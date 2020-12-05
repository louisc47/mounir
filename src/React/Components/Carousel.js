import React from 'react';
import {throttle} from 'lodash'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.changeSlideThrottle = throttle(this.changeSlide, 1000, {})
  }

  changeSlide = (direction) => {
    const { children = null } = this.props;
    if (!children || children.length <= 1) {
      return null;
    }
    const count = children.length;
    const { position } = this.state;
    if(direction === 'next'){
        this.setState({
            position: position + 1 < count ? position + 1 : 1
        })
    }
    else if (direction === 'prev'){
        this.setState({
            position: position !== 0 ? position - 1 : count - 1
        })
    }
  };

  handleScroll = (e) => {
    const { deltaY } = e;
    if (deltaY > 0) {
        this.changeSlideThrottle('next')
    }
    else this.changeSlideThrottle('prev')
  };

  render() {
    const { children, width, height } = this.props;
    const styles = {
      width,
      height,
    };
    const { position } = this.state;
    console.log(position);
    return (
      <div style={styles} >
        {children[position]}
      </div>
    );
  }
}
