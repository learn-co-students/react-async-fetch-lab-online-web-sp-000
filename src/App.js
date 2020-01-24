import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => resp.json())
    .then(peopleInSpace => console.log(peopleInSpace))
  }
  
  
  render() {
    return <h1>Hello</h1>;
  }
}

export default App;