// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

//   constructor(props) {
//     super()
//     this.state = {
//       astros: []
//     }
//   }  

  state = {
      astros: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => this.setState({astros: json.people}))
  }

  render() {
    return (
''
    )
  }
  
}