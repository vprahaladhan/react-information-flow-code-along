import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor(),
      childrenColor: getRandomColor()
    });
  };

  changeChildrenColor = (color) => {
    this.setState({...this.state, childrenColor: color});
  };

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} onClick={this.changeColor} />
        <Child color={this.state.childrenColor} onClick={this.changeColor} />
      </div>
    )
  }
}

export default Parent