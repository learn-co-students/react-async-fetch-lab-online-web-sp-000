// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => this.setState({people: json.people}))
  }
  render(){
    return (<div>
      <h1>Hello People!</h1>
      <ul>
      {this.state.people.map(person => <li>person.name</li>)}
    </div>)
  }
}
