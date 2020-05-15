// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
  // constructor () {
  //   currentAstronauts = []
  // }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    // .then(response => response.json())
    // .then(jsonizedResponse => this.currentAstronauts = jsonizedResponse)
    // .then (console.log(this.currentAstronauts))
  }

  render() {
    return (
      <div>

      </div>
    )
  }

}
