// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    return fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => this.setState({ peopleInSpace: data.people }));
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, index) => (
          <h1 key={index}>{person.name}</h1>
        ))}
      </div>
    );
  }
}