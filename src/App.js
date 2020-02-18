// create your App component here
import React from 'react';

export default class App extends React.Component {

    state = {
        astronauts: []
    }


    render() {

        return (
            <div>
                { this.state.astronauts.map(astro => <p>{astro.name}</p>) }
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                astronauts: json.people
            })
        })
    }

}
