import React, { PureComponent, useEffect, useState } from 'react'

function HelloWorld (props) {
  return (
    <div>Hello World</div>
  )
}

function Counter () {
  const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   // invoked when Counter is updated
  //   document.title = counter
  // })

  // useEffect(() => {
  //   // invoked once
  //   document.title = counter
  // }, [])

  useEffect(() => {
    // invoked when counter is changed
    document.title = counter
    return () => {
      // invoked when Counter is unmounted
      // do something...
    }
  }, [counter])


  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter => counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter => counter - 1)}>-1</button>
    </div>
  )

}

export class App extends PureComponent {
  render () {
    return (
      <>
        <div>App</div>
        <HelloWorld />
        <Counter />
      </>
    )
  }
}

export default App