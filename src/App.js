// create your App component here
import React, {Component} from 'react';

class App extends Component {

    state = {
        astro: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(r => r.json())
            .then(a => this.astroUpdate(a.people))
    }

    astroUpdate = astros => {
        this.setState({
            astro: astros
        })
    }

    render() {
        return (
            <div>{this.state.astro.map(a => <li>{a.name}</li>)}</div>
        )
    }
    

}

export default App