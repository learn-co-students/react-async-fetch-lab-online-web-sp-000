// create your App component here
import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state= {
            astronauts: []
        }
    }

    get theseAstronauts(){
        return this.state.astronauts
    }

    componentDidMount(){
       fetch('http://api.open-notify.org/astros.json').then(
            res => res.json()
        ).then(data => this.setState({astronauts: data}))
    }

    render(){
        return(
            <div>
               <p>{this.state.astronauts}</p>
            </div>

        )
    }

}
export default App