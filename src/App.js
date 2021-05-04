// - Create an `App` class component from scratch
// - Write a `componentDidMount` method. Inside the method, send a `fetch` request to
//   http://api.open-notify.org/astros.json, a free API that returns a list of people
//   currently in space.

import React, {Component} from 'react'

export default class App extends Component {

    state = {
        spacePeople: []
    }

    render(){
        return(
            <div>
                {this.state.spacePeople.map(person => person.name)}
            </div>
        )
    }

    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(response => response.json)
        .then(data => {
            setState({
                spacePeople: data.people
            })
        })
    }

}