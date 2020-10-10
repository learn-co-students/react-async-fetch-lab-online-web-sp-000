// create your App component here
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return <h1>Success</h1>
  }
}

export default App
