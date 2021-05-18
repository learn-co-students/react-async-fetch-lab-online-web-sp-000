import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => this.setState({data: json.people}))
    }

    render() {
        return (
            <div>
                <h1>People in Space</h1>
                <ul>
                {this.state.data.map(person => <li key={person.name} >{person.name} - {person.craft}</li>)}
                </ul>
            </div>
        )
    }
}