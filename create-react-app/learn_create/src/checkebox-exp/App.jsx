import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      hobbies: [
        { name: 'sing', id: 0, isChecked: false },
        { name: 'dance', id: 1, isChecked: false },
        { name: 'draw', id: 2, isChecked: false },
        { name: 'play', id: 3, isChecked: false },
      ]
    }
  }

  handleSelectHobby(event, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({ hobbies })
  }

  handleSubmit() {
    const hobbies = this.state.hobbies.filter(item => item.isChecked).map(item => item.name)
    console.log(hobbies);
  }
  render() {
    const { hobbies } = this.state
    return (
      <div>
        <div>
          <form onSubmit={() => this.handleSubmit()}>
            {hobbies.map((item, index) =>
              <label htmlFor={item.name} key={item.id}>
                <input type="checkbox" checked={item.isChecked} onChange={(e) => this.handleSelectHobby(e, index)} />
                <span>{item.name}</span>
              </label>
            )}
          </form>
        </div>
        <div>
          <button type='submit' onClick={() => { this.handleSubmit() }} >submit</button>
        </div>
      </div>
    )
  }
}

export default App