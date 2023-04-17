import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'hello state'
    }
  }
  handleChangeMsg() {
    // this.setState({
    //   message: 'new msg'
    // })
    // console.log('new value', this.state.message)
    // setState 是异步的
    // this.setState((state, props) => {

    //   console.log(state, props)
    //   return {
    //     message: 'new msg'
    //   }
    // })
    this.setState({
      message: 'new msg'
    })
    this.setState({
      message: 'new msg1'
    })
    this.setState({
      message: 'new msg2'
    })
  }
  componentDidUpdate() {
    console.log(this.state.message)
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleChangeMsg()}>change</button>
      </div>
    )
  }
}

export default App