import fetch from 'node-fetch'
// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        outerSpace: []
    }
    
    render() {
        return (
            <ul>
                {this.state.outerSpace.map((person, id )=> <li key={id}>{person.name}</li>)}
            </ul>
        )
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                
                outerSpace: data.people
            })
        })
    }


}

export default App
