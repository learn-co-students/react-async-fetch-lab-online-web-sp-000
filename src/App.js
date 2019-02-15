import React, { Component } from 'react';

class App extends Component {

  state={
    peopleInSpace:[]
  }

  componentDidMount(){
    console.log("DidMount")
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(json => {

        this.setState({
          peopleInSpace: json.people
        })

    })
  }

  render() {
    console.log("rendering")
    return (
      <div>{this.state.peopleInSpace.map(people => people.name)}</div>
    );
  }

}

export default App;// create your App component here
