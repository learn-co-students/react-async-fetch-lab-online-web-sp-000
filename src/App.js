import React, { Component } from 'react';


class App extends Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then( data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })

    }
    
    render(){
        return(
            <div></div>
        )
    }

}

export default App;
