import Reactimport, {Component} from 'react';

export default class App extends Component {
    state ={
        astronauts: []
    }


    render() {
        return this.state.astronauts.map(astronauts => {
            <li>{astronaut.name}</li>
        })
    }

    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`).then(response =>
        response.json())
        .then(res => this.state({astronaut: res.people}))
    }

}

