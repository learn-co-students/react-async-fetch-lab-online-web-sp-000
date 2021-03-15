// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.spacePeople
        })
      })
  }

  render() {
    return (
      <div>
      </div>
    )
  }

}

export default App;