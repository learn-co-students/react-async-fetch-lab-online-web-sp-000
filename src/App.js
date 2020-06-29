import React, { Component } from 'react';

class App extends Component {

    state = {
        astros: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(json => this.setState(data: json))
    }

    render() {
        return (
            <div>{this.state.astros.map}</div>
        )
    }
}

export default App;