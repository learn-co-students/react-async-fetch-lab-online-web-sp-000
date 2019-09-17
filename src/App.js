import React from 'react';

export default class App extends React.Component {
  render() {
    return 'Hey there';
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astronauts => {
        console.log(astronauts)
      })
  }
}
