import React, { Component } from 'react';

//no need to modify anything in this component
class App extends Component {

  state = {
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Lab</h1>
        </header>
      </div>
    );
  }
}

export default App;