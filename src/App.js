import React from 'react';

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        });
      });
  }

  render() {
    return (
      <div>
        <h1>People Currently In Space:</h1>
        <ol>{this.state.peopleInSpace.map((person, id) =>
          <li key={id}>
            {person.name}
          </li>)}
        </ol>
      </div>
    );
  }
}