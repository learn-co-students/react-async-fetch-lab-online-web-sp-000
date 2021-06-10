// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                <ol>
                {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ol>
            </div>
        )
    }

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
