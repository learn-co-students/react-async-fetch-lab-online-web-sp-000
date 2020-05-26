// create your App component here
import React from 'react';

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            const {number, message, people} = data
            this.setState({people})
        })
    }

    makePeople() {
        this.state.people.map(p => <p>{p.name}{p.craft}</p>)
    }

    render() {
        return(
            <div>
                <p> {this.makePeople} </p>
            </div>
        )
    }

}
