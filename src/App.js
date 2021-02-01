import { render } from 'enzyme'
import React, { Component } from 'react'

class App extends Component {
        state = {
            spacePeople: []
        }

    render(){
        return (
            <div>
                {this.state.spacePeople.map(person => person.name)}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(({people}) => this.setState({ spacePeople: people }))

    }
}
export default App
