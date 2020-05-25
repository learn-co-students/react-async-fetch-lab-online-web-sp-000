// create your App component here
import React, { Component } from 'react'

class App extends Component {
    state = {
        message: "",
        people: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    message: data.message,
                    people: data.message.name
                })
            })
    }
    render(){
        return (

            <div>
                <h1>
                    {this.state.message}
                </h1>
                <h2>
                    {this.state.people}
                </h2>
            </div>
        )
    }
}
export default App