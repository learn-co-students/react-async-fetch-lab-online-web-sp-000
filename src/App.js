// create your App component here
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        let that = this; 

        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json() )
        .then(json => { that.setState({people: json.people} )})
    }

    render() {
        return (
            <div>
                {this.state.people.map((person, idx) => <div key={idx}><p>{person.name}</p></div>)}
            </div>
        )
    }
}

export default App 