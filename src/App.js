// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
    state = {
        astronauts: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ astronauts: people }))
    }

    render(){
        return(
            <div>
                {this.state.astronauts.map((person) => <h1>{person.name}</h1>)}
            </div>
        )
    }
}