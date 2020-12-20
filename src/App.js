// create your App component here
import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            space: {}
        }
    };

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => this.setState({
            space: {...json}
          }))
    };

    render() {
        return (
            <div>
                <h2>Hello!</h2>
            </div>
        )
    }

}