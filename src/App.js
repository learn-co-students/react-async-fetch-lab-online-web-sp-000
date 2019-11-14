import React, {Component} from 'react'

class App extends Component {
    state = {
        spacePeople: []
    }

    render() {
        return <ul>{this.state.spacePeople.map(person => <li>{person.name}</li>)}
        </ul>
    }

    componentDidMount() {
       fetch("http://api.open-notify.org/astros.json")
       .then(resp => resp.json())
       .then(people => this.setState({ spacePeople: people }))
    }
}

export default App