// create your App component here
import React from "react";

class App extends React.Component {
    
    state = {
        peopleInSpace: []
    }

    render () {
        return (
            <div>
                {this.state.peopleInSpace.map( person => <h1>{person.name}, {person.craft}</h1>)}
            </div>
        )
    }

    componentDidMount () {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(data => {
              this.setState({
                  peopleInSpace: data.people
              })
          })
    }
};

export default App;