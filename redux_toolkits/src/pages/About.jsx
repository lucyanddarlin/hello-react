import React, { PureComponent } from 'react'
import { connect } from '../hoc/connect'
import { changeCount } from '../store/features/counter'

export class About extends PureComponent {
  changeCount = (num) => {
    this.props.changeCount(num)
  }
  render () {
    const { counter } = this.props
    return (
      <div>
        <h2>About - {counter}</h2>
        <button onClick={e => this.changeCount(1)}>+1</button>
        <button onClick={e => this.changeCount(-1)}>-1</button>
        <button onClick={e => this.changeCount(8)}>+8</button>
        <button onClick={e => this.changeCount(-8)}>-8</button>
      </div>
    )
  }
}

// function fn2 (dispatch) {
//   return {
//     changeCount (num) {
//       dispatch(changeCount(num))
//     }
//   }
// }

const mapStoreToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  changeCount: (num) => dispatch(changeCount(num))
})

export default connect(mapStoreToProps, mapDispatchToProps)(About)