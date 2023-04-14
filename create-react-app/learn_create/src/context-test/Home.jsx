import React, { Component } from 'react'

export class Home extends Component {
  constructor({ name, age }) {
    super({ name, age })
  }
  render () {
    return (
      <div>Home</div>
    )
  }
}

export default Home