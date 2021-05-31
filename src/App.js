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
        let i = 0;
        return this.state.people.map(e => {
            i++;
            return <li key={i}>{e.name}</li>
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