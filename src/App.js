// create your App component here
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
        peopleInSpace: []
    }
    
  }

  //Your code here

  componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
      .then(resp=>resp.json())
      .then(data=> { 
          this.setState(
              {peopleInSpace: data.people}
          )
      })
      
  }

  render() {
      console.log(this.state.peopleInSpace[0])
      return (
          <ul> {this.state.peopleInSpace===[] ? "" : this.state.peopleInSpace.forEach(p=>(<li>{p.name}</li>))}</ul>
      )
  }


}

export default App