// create your App component here
import React, {Component} from 'react';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      astros: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(astronautsJson => {this.setState({astros: astronautsJson.people})})
  }

  render() {
    return <div id="astros">{this.state.astros.map(astro => <p>{astro.name}</p>)}</div>
  }
}