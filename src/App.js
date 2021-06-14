// create your App component here
import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super()
        this.state = {people: []}
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => this.setState({
            people: json.people
        }))
    }

    render() {
        return <div>{this.state.people.map((person,id) => <h1 key={id}>{person.name}</h1>)}</div>
    }
}