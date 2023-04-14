import React, { Component } from 'react'
import NavBar from './NavBar/index'

export class App extends Component {
  render () {
    return (
      <div>
        <NavBar>
          <button>button</button>
          <h2>title</h2>
          <i>text</i>
        </NavBar>
      </div>
    )
  }
}

export default App