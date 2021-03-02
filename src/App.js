// create your App component here
import React, {Component} from 'react'

export default class App extends React.Component {
    

    state = {
        peopleInSpace: []
    }
    
    componentDidMount(){
        const spaceURL = 'http://api.open-notify.org/astros.json'
        fetch(spaceURL)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render(){
        return (
            <div>
                <ul>
                    <lh><b>People Currently Floating in the Ether of Space</b></lh>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }

}