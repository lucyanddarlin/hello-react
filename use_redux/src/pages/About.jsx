import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCountAction } from '../store/actionCreators'

export class About extends PureComponent {
  handleChangeCount (num) {
    this.props.changeCount(num)
  }
  render () {
    const { count, banners } = this.props
    return (
      <div>
        <div>
          <h2>About - {count}</h2>
          <button onClick={() => this.handleChangeCount(+1)}>+1</button>
          <button onClick={() => this.handleChangeCount(-1)}>-1</button>
        </div>
        <div className='Banners'>
          <h2>Banners</h2>
          <ul>
            {
              banners.map((item, index) =>
                <li key={index}>
                  {item.title}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  count: state.count,
  banners: state.banners
})

const mapDispatchAction = (dispatch) => ({
  changeCount (num) {
    dispatch(changeCountAction(num))
  }
})
export default connect(mapState, mapDispatchAction)(About)  