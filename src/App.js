// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }
 
    render() {
        return (
          <div>
            {this.state.peopleInSpace.map(person => person.name)}
          </div>
        )
    }

//   Write a `componentDidMount` method. Inside the method, send a `fetch` request to
//   http://api.open-notify.org/astros.json, a free API that returns a list of people
//   currently in space.
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
}

export default App
