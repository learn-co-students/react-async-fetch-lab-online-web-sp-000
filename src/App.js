// create your App component here
import React from 'react';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = { peopleInSpace:[] };
    }

    render = () => (<div>{this.state.peopleInSpace.map(person => person.name)}</div>)

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(({people}) => this.setState({ peopleInSpace: people }))
        .catch(error => console.error(error.message))
    }
  }