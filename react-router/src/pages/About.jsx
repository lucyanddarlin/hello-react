import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class About extends PureComponent {
  handleNavigate (path) {
    const { navigate } = this.props.router
    navigate(path)
  }
  render () {
    return (
      <div>
        <h2>
          About
          <button onClick={() => this.handleNavigate('/home')} >toHome</button>
        </h2>
      </div>
    )
  }
}

export default withRouter(About)