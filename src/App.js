// create your App component here
import React, { Component } from 'react';

export default class App extends React.Component {

  render() {
    return(
      <div>Hi</div>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
}
