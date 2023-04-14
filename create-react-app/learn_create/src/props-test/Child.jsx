import React, { Component } from 'react'

export class Child extends Component {

  handleChangeParentCount (count) {
    this.props.changeParentCount(count)
  }
  render () {
    return (
      <div>
        <button onClick={() => this.handleChangeParentCount(-1)}>-1</button>
        <button onClick={() => this.handleChangeParentCount(1)}>+1</button>
      </div>
    )
  }
}

export default Child