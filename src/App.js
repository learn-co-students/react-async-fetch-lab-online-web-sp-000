// create your App component here
import React, { Component} from 'react';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      list: [],
      linda: "hiiii"
    }
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then( resp => resp.json() ).then( json => {
      this.setState({
        list: json,
        linda: 'zuiganchet'
      })
    })
  }

  render() {
    return (
      <div>
        <h1>hi ca nha yeu cua kem</h1>
        {this.state.linda}
      </div>
    )
  }


}
