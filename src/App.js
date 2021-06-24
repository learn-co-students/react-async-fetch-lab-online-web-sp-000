import React, { Component } from 'react';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      astronauts: []
    }
  }

  render = () => {
    return(
      <div>
        {this.state.astronauts.map(person => {
          return(
            <p>Name: {person.name}</p>
          )}
        )}
      </div>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(json => {
      console.log(json.people)
      this.setState({ astronauts: json.people})
    })
  }
}
