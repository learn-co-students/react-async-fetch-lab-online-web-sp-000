// create your App component here
import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        peopleInSpace: json.peopl
      })
    })
    const spacePeople = this.state.peopleInSpace
    console.log(spacePeople)
  }

  render (){
    
    return (
      'Hello'
    )
  }

}

export default App;