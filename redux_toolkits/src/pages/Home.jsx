import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCount } from '../store/features/counter'
import { fetchHomeMultiDataAction } from '../store/features/home'

export class Home extends PureComponent {
  componentDidMount () {
    this.props.handleFetchHomeMultiData()
  }
  render () {
    const { counter, banners, handleChangeCount } = this.props
    return (
      <div>
        <h2>Home - {counter}</h2>
        <button onClick={() => handleChangeCount(1)}>+1</button>

        <div className='banners'>
          <h2>Banners</h2>
          <ul>
            {banners.map((item, index) =>
              <li key={index}>{item.title}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeCount (num) {
    dispatch(changeCount(num))
  },
  handleFetchHomeMultiData () {
    dispatch(fetchHomeMultiDataAction())
  }
})

export default connect(mapStoreToProps, mapDispatchToProps)(Home)

