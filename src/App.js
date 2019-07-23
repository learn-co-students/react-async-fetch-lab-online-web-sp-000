// create your App component here
import React from 'react'

export default class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  render() {
    const spacePals = this.state.peopleInSpace.map((person, index) => <li key={index}>{person.name}</li>)

    return (
      <div>
        <ul>
        {spacePals}
        </ul>
      </div>
    )
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
}
