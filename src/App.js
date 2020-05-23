// create your App component here
import React, { Component } from "react"

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            spacePeeps: []
        }
    }

    setPeeps = (peeps) => {
        this.setState({
            spacePeeps: peeps    
        })
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setPeeps(data.people)
        })
    }

    render() {
        return (
            <div>{this.state.spacePeeps.map(person => person.name)}</div>
        )
    }
}