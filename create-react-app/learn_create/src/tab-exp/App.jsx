import React, { Component } from 'react'
import TabsControl from './TabsContorl/index'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      tabs: ['aaa', 'bbb', 'ccc'],
      currentIndex: 0
    }
  }

  handleChangeTab (index) {
    this.setState({ currentIndex: index })

  }
  render () {
    const { tabs } = this.state
    const { currentIndex } = this.state
    return (
      <div>

        <TabsControl tabs={tabs} changeTab={(index) => this.handleChangeTab(index)} />
        <h2>{tabs[currentIndex]}</h2>
      </div>
    )
  }
}

export default App