import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'
import { countWrapper } from './hoc/count_hoc'
import About from './pages/About'
import Cate from './pages/Cate'

export class App extends PureComponent {
  render () {
    const { count } = this.props
    return (
      <div>
        <h2>APP - {count}</h2>
        <h2>App</h2>
        <div className='pages'>
          <Home />
          <Profile />
          <About />
          <Cate />
        </div>
      </div>
    )
  }
}

export default countWrapper(App)  