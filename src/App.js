import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ people: data.people });
      });
  }

  render() {
    return (
      <div>
        {" "}
        {this.state.people.map(person => (
          <p>{person.name}</p>
        ))}{" "}
      </div>
    );
  }
}

export default App;
