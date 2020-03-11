// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
    spacePeople: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => 
        this.setState({
          spacePeople: data.people
        }))
  }

  render() {
    return(
      <div>
        {this.state.spacePeople.map((people, id) => <li key={id}>{people.name}</li>)}
      </div>
    )
  }
}

export default App;