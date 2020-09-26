// App class component
// Write a componentDidMount method sending fetch req to http://api.open-notify.org/astros.json

import React, {Component} from 'react'

export default class App extends Component {

  state = { peopleInSpace: [] }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

}