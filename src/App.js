// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = { 
    spacePeople: []
  }
  
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        this.setState({
          spacePeople: json.people
        });
      });
  }

  render() { 
    return (
      <ul>
        {this.state.spacePeople.map(person => <li>{person.name}</li>)}
      </ul>
    );
  }
}
 
export default App;