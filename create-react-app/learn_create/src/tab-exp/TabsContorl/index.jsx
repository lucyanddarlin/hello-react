import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
  constructor() {
    super()

    this.state = { currentIndex: 0 }
  }

  handleChangeCurrentIndex (index) {
    this.setState({
      currentIndex: index
    })
    this.props.changeTab(index)
  }
  render () {
    const { tabs } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab-control'>
        {tabs.map((item, index) =>
          <div
            key={item}
            className={`tab-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => this.handleChangeCurrentIndex(index)}
          >
            <span>{item}</span>
          </div>
        )}
      </div>
    )
  }
}

export default TabControl