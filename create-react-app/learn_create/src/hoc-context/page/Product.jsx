import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme'

class Product extends PureComponent {
  constructor() {
    super()

    this.state = {
      name: 'Product'
    }
  }
  render() {
    return (
      <div>
        <h2>
          Product:
          <ThemeContext.Consumer>
            {
              value => {
                return <h2>{value.color}</h2>
              }
            
          </ThemeContext.Consumer>
        </h2>
      </div>
    )
  }
}



export default Product