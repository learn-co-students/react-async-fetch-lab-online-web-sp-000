// create your App component here
import React from 'react'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            people: [],
        }
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
            this.setState({
                people: obj.people,
            })
            this.buildList()
        })
    }


    buildList = () => {
     return this.state.people.map(person => <div>{person.name}<p>{person.craft}</p></div>)
    }





    render(){
        return(
            <div>
                {this.buildList()}
            </div>
        )
    }
}