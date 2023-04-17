import React, { PureComponent } from 'react'
import { countWrapper } from '../hoc/count_hoc'

export class Home extends PureComponent {
  handleChangeCount (num) {
    this.props.changeCount(num)
  }
  render () {
    const { count } = this.props
    return (
      <div>
        <h2>Home</h2>
        <h2>Home - {count}</h2>
        <button onClick={() => this.handleChangeCount(1)}> +1 </button>
        <button onClick={() => this.handleChangeCount(5)}> +5 </button>
        <button onClick={() => this.handleChangeCount(8)}> +8 </button>
      </div>
    )
  }
}

export default countWrapper(Home) 