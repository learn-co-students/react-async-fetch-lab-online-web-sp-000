import React, { Component } from 'react';

class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(peopleInSpace => this.setState({peopleInSpace}))
  }

  render() { 
    return ( 
      <div></div>
     );
  }
}
 
export default App;


