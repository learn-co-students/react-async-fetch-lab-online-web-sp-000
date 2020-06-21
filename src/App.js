// create your App component here
import React, { Component } from 'react';

export default class App extends React.Component {

    // constructor(){
    //     this.state = {
    //         astros: []
    //     }
    // }

    state = {
        astros: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(json => {
            this.setState({
                astros: json.people
            })
        })
        .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                {this.state.astros.map(astro => astro.name)}
            </div>
        )
    }
}