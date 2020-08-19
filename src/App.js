// create your App component here
import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace: null
    }

    render() {
        return <h1>Hello World! </h1>;
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
                console.log(this.state.peopleInSpace)

            })
    }


}

export default App
