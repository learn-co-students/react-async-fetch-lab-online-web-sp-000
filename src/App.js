import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      number: 0,
      people: []
    }
  }

  displayAstronauts = () => { // Most likely, this belongs in a separate component.
    return (
      <ul>
        {this.state.people.map((person, index) => <li key={index}>{person.name}, {person.craft}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1>People currently in space:</h1>
        {this.displayAstronauts()}
      </div>
    )
  }

  componentDidMount() { // Not sure if this is conventional, but it works.
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astronautData => {
        this.setState({
          ...this.state,
          ...astronautData
        })
      })
  }
}

export default App;
