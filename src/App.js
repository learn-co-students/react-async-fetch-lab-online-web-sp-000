import React from 'react';

// create your App component here
class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

}

export default App;