import React, {Component} from 'react';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      spacePeople: []
    };
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => this.setState({
      spacePeople: data.people
    }));
  }

  render(){
    return(
      <div>
        {this.state.spacePeople.map(person=> person.name)}
      </div>
    )
  }
}