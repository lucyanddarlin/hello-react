import React, { PureComponent } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'

export class App extends PureComponent {
  render () {
    return (
      <div className='app'>
        <div className='header'>
          Header
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <hr />
        </div>
        <div className='content'>
          <Routes >
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} >
              <Route path='/home' element={<HomeOne />} />
              <Route path='/home/one' element={<HomeOne />} />
              <Route path='/home/two' element={<HomeTwo />} />
            </Route>
            <Route path='/About' element={<About />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className='footer'>
          <hr />
          Footer
        </div>

      </div>
    )
  }
}

export default App