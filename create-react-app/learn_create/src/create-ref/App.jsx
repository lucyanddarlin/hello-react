import React, { PureComponent, createRef, forwardRef } from 'react'


// class HelloWorld extends PureComponent {
//   test() {
//     console.log('test')
//   }
//   render() {
//     return (
//       <div>HelloWorld</div>
//     )
//   }
// }

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div ref={ref}>HelloWorld</div>
  )
})



export class App extends PureComponent {
  constructor() {
    super()

    this.comRef = createRef()
  }

  gerComRef() {
    console.log('get com ref', this.comRef.current)
  }
  render() {
    return (
      <div>
        <h2>App</h2>
        <HelloWorld ref={this.comRef} />
        <button onClick={() => this.gerComRef()}>get component ref</button>
      </div>
    )
  }
}

export default App