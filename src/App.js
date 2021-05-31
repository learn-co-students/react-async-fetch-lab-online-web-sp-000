import React, { Component } from "react";

export default class App extends Component {

    state = {
        people: []
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.people !== nextState.people
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => this.setState({ people: data.people }))
    }

    getPeople = () => {
        return this.state.people.map(e => {
            const id = `astro-${this.state.people.indexOf(e)}`
            return <li id={id} key={id}>{e.name}</li>
        })
    }

    render() {
        return(
            <ul>
                {this.getPeople()}
            </ul>
        )
    }
}