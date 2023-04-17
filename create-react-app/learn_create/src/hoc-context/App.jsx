import React, { PureComponent } from 'react'
import Product from './page/Product'
import ThemeContext from './context/theme'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: 'blue', size: 30 }} >
          <Product />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App