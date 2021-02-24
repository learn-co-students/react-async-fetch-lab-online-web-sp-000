// create your App component here
import React from 'react';

export default class App extends React.Component {

    constructor() {
        super() 
        this.state = {
            people: []
        }
    }

    renderSpacePeople = () => {
        return this.state.people.map(person => 
        <li>
            <h3>{person.name} - {person.craft}</h3>
        </li>)
    }
    
    render() {
        return <div>
            <h1>People in Space: </h1>
            <ul>{this.renderSpacePeople()}</ul>
        </div>
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => json.people.map(person => this.setState({people: [...this.state.people, person]})))
    }
}