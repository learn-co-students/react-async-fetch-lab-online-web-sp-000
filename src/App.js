import React, { Component } from "react";

class App extends React.Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then(resp => resp.json())
      .then(people => this.setState({ people: people }));
    debugger;
  }

  render() {
    return (
      <div>
        {this.state.people.map(person => {
          person.name;
        })}
      </div>
    );
  }
}
export default App;
