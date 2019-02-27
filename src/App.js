import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(json => this.setState({peopleInSpace: json}))
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default App;
