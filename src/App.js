// create your App component here
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
  }

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))
  }

  render() {
    return(
    <div>
      {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
    </div>
    )
  }
}

export default App
