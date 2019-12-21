// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      peopleInSpace: {}
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json()).then(json => {
        this.setState({
          peopleInSpace: json
        });
      });
  }

  render() {
    return(
      <div>{this.state.peopleInSpace}</div>
    );
  }
}
