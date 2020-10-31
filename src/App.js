// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            
            debugger

            this.setState({
                people: data['people']
            })

            
        })
    }

    render() {
        return (
            <div>
                {this.state.people}
            </div>
        )
    }

}