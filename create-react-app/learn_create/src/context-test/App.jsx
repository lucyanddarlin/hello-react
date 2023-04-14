import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: { name: 'lucy', age: 18 }
    }
  }
  render () {
    const { info } = this.state
    return (
      <div><Home {...info} /></div>
    )
  }
}

export default App