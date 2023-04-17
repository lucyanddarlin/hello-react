import React, { PureComponent } from 'react'
import Cart from './Cart'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: !!localStorage.getItem('token')
    }
  }
  handleLogin() {
    localStorage.setItem('token', 'lucy')
    this.setState({
      isLogin: !!localStorage.getItem('token')
    })
  }
  handleLogout() {
    localStorage.removeItem("token")
    this.setState({
      isLogin: !!localStorage.getItem('token')
    })
  }
  render() {
    return (
      <div>
        App
        <button onClick={() => this.handleLogin()}>login</button>
        <button onClick={() => this.handleLogout()}>logout</button>
        <Cart />
      </div>
    )
  }
}

export default App