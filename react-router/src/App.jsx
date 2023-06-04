import React from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'
import Settings from './pages/Settings'

export function App () {
  const navigate = useNavigate()
  function handleNavigate (path) {
    navigate(path)
  }

  return (
    <div className='app'>
      <div className='header'>
        Header
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <span onClick={() => handleNavigate('/settings')}>Settings</span>
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
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
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

export default App