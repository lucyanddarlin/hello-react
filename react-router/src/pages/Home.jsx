import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <Link to='/home/one'>HomeOne</Link>
        <Link to='/home/two'>HomeTwo</Link>
        <span>HomeThree</span>
        <Outlet />
      </div>
    )
  }
}

export default Home