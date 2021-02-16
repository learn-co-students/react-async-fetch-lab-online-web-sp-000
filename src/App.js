// create your App component here
import React from 'react';
import { Person } from './Person'

export default class App extends React.Component{

    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => {
                if(!resp.ok) throw resp.statusText
                return resp.json()
            })
            .then(data => {
                const {people, number, message } = data
                this.setState({ people })
            })
            .catch(e =>  {
                alert(e)
            })
            
    }

    constructPeople = () => this.state.people.map(p => <Person name={p.name} craft={p.craft} />)

    render(){
        return(
            <div className="PeopleContainer">
                {this.constructPeople()}
            </div>
        )
    }
}
