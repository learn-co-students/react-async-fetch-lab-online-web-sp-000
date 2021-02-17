// create your App component here
import React from 'react';

class App extends React.Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(p => console.log(p))
    }

    render () {
        return <p>Hi</p>

    }

}

export default App;