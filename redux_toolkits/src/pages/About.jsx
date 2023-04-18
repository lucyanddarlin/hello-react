import React, { PureComponent } from 'react'
import { connect } from '../hoc/connect'

export class About extends PureComponent {
  render () {
    const { counter } = this.props
    return (
      <div>
        <h2>About - {counter}</h2>
      </div>
    )
  }
}


const mapStoreToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStoreToProps)(About)