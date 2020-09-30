// create your App component here
import React from "react";

export default class App extends React.Component {
    contructor() {
        

    }

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.number
            })
        })
    }

    render() {
        return(
            <h1>
                There are {this.state.peopleInSpace} people in space. 
            </h1>
        )
    }
}