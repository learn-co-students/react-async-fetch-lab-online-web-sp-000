// create your App component here

import React, { Component } from "react";


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {astros_data: []}
  }
  
  fetchWords() {
    return fetch('http://api.open-notify.org/astros.json').then(response => response.json());
  }
  
  componentDidMount() {
    this.setState(
      {astros_data: this.fetchWords()}
      )
  }
  
  render() {
    return(
      <div> {this.state.astros_data}</div>
    )
  }
  
}