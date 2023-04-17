import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchChangeBannersAction } from '../store/actionCreators'

export class Cate extends PureComponent {
  componentDidMount () {
    this.props.changeBanners()
  }
  render () {
    return (
      <div>
        <h2>Cate</h2>
      </div>
    )
  }
}

const mapDispatchAction = (dispatch) => ({
  changeBanners () {
    dispatch(fetchChangeBannersAction())
  }
})

export default connect(null, mapDispatchAction)(Cate)  