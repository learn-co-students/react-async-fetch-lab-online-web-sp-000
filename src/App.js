// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
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