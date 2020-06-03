import Reach, { Component } from 'react';

class App extends Component {
  
  state = {
    peopleInSpace: []
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astors.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
  
  render() {
    return (
      <div>{this.state.peopleInSpace.map((person, id)) => <h1 key={id}>{person.name}</h1)}</div>
      )
      }
      
}

export default App;
