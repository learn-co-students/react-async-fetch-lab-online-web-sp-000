// create your App component here
import React, {Component} from 'react';

class App extends Component {

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then(resp => resp.json())
			.then(body => console.log(body))
	}

	render() {
		return (
			<h1>Works.</h1>
		)
	}
}

export default App;