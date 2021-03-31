import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.color
    }
  }
  
  changeColor = () => {
    this.setState({
      color: getRandomColor()
    });
    this.props.onClick();
  };

  render() {
    return (
      <div className="child" style={{backgroundColor: this.props.color}} onClick={this.changeColor}></div>
    )
  }
}

export default Child
