import React, { Component } from 'react'

class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                people: data.astros
            })
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default App