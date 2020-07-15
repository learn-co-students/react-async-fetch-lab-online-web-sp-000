import React, {Component} from 'react';

class App extends Component {

    state = {
        apiData: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                apiData: data.people
            })
        })
    }

    render(){
        console.log(this.state.apiData)
        return(
            <p> {this.state.apiData.map(person => person.name)} </p>
        ) 
    }

}

export default App;