import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCount } from '../store/features/counter'

export class Profile extends PureComponent {
  render () {
    const { counter, handleChangeCount } = this.props
    return (
      <div>
        <h2>Profile - {counter}</h2>
        <button onClick={() => handleChangeCount(-1)}>-1</button>
      </div>
    )
  }
}

const mapStoreToProps = (state) => ({
  counter: state.counter.counter
})
const mapDispatchToProps = (dispatch) => ({
  handleChangeCount (num) {
    dispatch(changeCount(num))
  }
})

export default connect(mapStoreToProps, mapDispatchToProps)(Profile)

