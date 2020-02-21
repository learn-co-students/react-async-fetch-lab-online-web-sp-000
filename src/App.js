// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    return fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.peopleInSpace.map(person => person.name + ' ')}
      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs


}

export default App;
