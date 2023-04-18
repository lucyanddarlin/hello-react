import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { connect } from 'react-redux'
import './style.css'
import About from './pages/About'

export class App extends PureComponent {
  render () {
    const { counter } = this.props
    return (
      <div>
        <h2>App - {counter}</h2>
        <div className='pages'>
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStoreToProps)(App)
