import React, { Component } from 'react'
import Child from './Child'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }
  handleChangeCount (newCount) {
    this.setState({
      count: this.state.count + newCount
    })
  }
  render () {
    const { count } = this.state
    return (
      <div><Child changeParentCount={(newCount) => this.handleChangeCount(newCount)} />
        <span>{count}</span>
      </div>
    )
  }
}

export default App