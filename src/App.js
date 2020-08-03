import React, { Component } from 'react';

class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount () {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            astronauts: data.people
          })
        })
    }

    render() {
        return <ul>{this.state.astronauts.map(person => <li>{person.name}</li>)}</ul>
    }
}

export default App; 