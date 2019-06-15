// create your App component here
import React, { Component } from 'react'

class App extends Component {
  state = {
      people: []
  }
  render() {
    return (
      <div>
      <ul>
        {this.state.people.map((person, id) => <li key={id}>{person.name}</li>)}
        </ul>
        </div>
    )
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(response => response.json()).then(({people}) => this.setState({ peopleInSpace: people }))
  }

}

export default App
