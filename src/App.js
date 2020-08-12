import React, { Component } from 'react'

export default class App extends Component {

    state = {
        peopleInSpace: []
    }


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(list => {
                this.setState({
                    peopleInSpace: list.people
                })
            })
    }



    render() {
        return (
        <div>{this.state.peopleInSpace.map(person => person.name)}</div>
        )
    }











}