// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    people: []
  }

  render() {
    return(
      <div>
        {this.state.people.map(p => p.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          people: data.people
        })
      })
  }

}

export default App;
