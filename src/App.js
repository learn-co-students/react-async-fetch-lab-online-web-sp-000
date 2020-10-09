// create your App component here
import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(parsedResp => console.log(parsedResp))
    }


    render() {
        return (
            <div></div>
        );
    }
}

export default App;