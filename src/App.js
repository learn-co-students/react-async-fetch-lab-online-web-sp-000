// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount (){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json()
        .then(data =>
            this.setState({
                peopleInSpace: data.people
            })
        )
    )
    }

    render(){
        return(
            <div>
                {this.state.peopleInSpace.map(person =><p>{person.name}</p>)}
            </div>
        
        )
    }
}