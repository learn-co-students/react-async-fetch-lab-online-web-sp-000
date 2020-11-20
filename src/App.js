// create your App component here
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super()
		this.state = {
			peopleInSpace: []
		}
	}


	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				peopleInSpace: data.people
			})
		})
	}

	renderPerson = (person) => {
		return <div>{person.name}</div>
	}

	render () {
		return (
			<div>{this.state.peopleInSpace.map(person => this.renderPerson(person))}</div>
		)
	}
}

export default App;
