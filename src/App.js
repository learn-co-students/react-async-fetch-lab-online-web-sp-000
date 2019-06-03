import React, { Component } from 'react';

class App extends Component {
    state = {
        spacePeople: []
     }
     
    render() { 
        return ( 
            <div>
                {this.state.spacePeople.map(person => person.name)}
            </div>
            
         );
    }
    componentDidMount() {
        const url = "http://api.open-notify.org/astros.json"
        fetch (url)
        .then(resp => resp.json())
        .then(data => {
            this.setState ({
                spacePeople: data.people
            })
        })
    }
}
 
export default App;
