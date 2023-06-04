import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Profile extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }

  }
  login () {
    this.setState({ isLogin: true })
  }
  render () {
    const { isLogin } = this.state
    return (
      <div>
        Profile
        {!isLogin ? <button onClick={(e) => this.login()}>Login</button> : <Navigate to='/home' />}

      </div>
    )
  }
}

export default Profile