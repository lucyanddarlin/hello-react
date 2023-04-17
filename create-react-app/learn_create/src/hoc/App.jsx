import React, { PureComponent } from 'react'

function enhancerUserInfo(OriginalComponent) {
  class newComponent extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        userinfo: {
          name: 'lucy',
          age: 18
        }
      }
    }
    render() {
      return (
        <OriginalComponent {...this.props} {...this.state.userinfo} />
      )
    }
  }
  return newComponent
}

const HelloWorld = enhancerUserInfo(function (props) {
  return (
    <div>HelloWorld {props.name}-{props.level}</div>
  )
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld level='321' />
      </div>
    )
  }
}

export default App