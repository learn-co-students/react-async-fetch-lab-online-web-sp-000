// create your App component here
import React from "react";

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => this.setState({ peopleInSpace: data }));
  }

  showPeople = () => {
    this.state.peopleInSpace.map((person, id) => (
      <h1 key={id}>{person.name}</h1>
    ));
  };

  render() {
    return <div>{this.showPeople()}</div>;
  }
}
