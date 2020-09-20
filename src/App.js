import React, { Component } from 'react'

class App extends Component {

  state = {
    number: 0,
    people: [],
    message: ""
  }

  render() {
    return (
      <div>
        <h1>Astronauts in Space</h1>
        <p>{this.state.people.map((person, id) => <span key={id}>{person.name} | {person.craft} </span>)}</p>
      </div>
    )
  }

  // {
  //   "number": 3,
  //   "people": [{"craft": "ISS", "name": "Chris Cassidy"}, {"craft": "ISS", "name": "Anatoly Ivanishin"}, {"craft": "ISS", "name": "Ivan Vagner"}],
  //   "message": "success"
  // }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(astroObj => {
      console.log(astroObj)
      this.setState({
        number: astroObj.number,
        people: astroObj.people,
        message: astroObj.message
      })
    })
  }
}

export default App
