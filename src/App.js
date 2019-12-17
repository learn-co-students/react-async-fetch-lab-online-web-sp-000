// create your App component here
import React, { Component } from 'react';

const URL = "http://api.open-notify.org/astros.json"

class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch(URL).then(res => res.json()).then(({ people }) =>
    this.setState({ peopleInSpace: people }))
  }

  render() {
    return (
    <div>{this.state.peopleInSpace.map((person, id) =>
      <h1 key={id}>{person.name}</h1>)}
    </div>
    )
  }
}

export default App;
