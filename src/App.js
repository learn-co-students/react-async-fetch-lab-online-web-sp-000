import React, { Component } from 'react'
import { Person } from './Person'


export default class App extends Component{

    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    // async componentDidMount(){
    //     const url = `http://api.open-notify.org/astros.json`
    //     try{
    //         const res = await fetch(url)
    //         if(!res.ok) throw res.statusText
    //         const {people, number, message} = await res.json()
    //         this.setState({ people })
    //     }catch(e){
    //         alert(e)
    //     }
    // }
    
    componentDidMount(){
        const url = `http://api.open-notify.org/astros.json`

        fetch(url)
        .then(res => {
            if(!res.ok) throw res.statusText
            return res.json()
        })
        .then(data => {
            const {people, number, message } = data
            this.setState({ people })
        })
        .catch(e => {
            alert(e)
        })

    }


    constructPeople = () => this.state.people.map(p => <Person name={p.name} craft={p.craft}/>)

    render(){

        return(
            <div className="PeopleContainer">
                {this.constructPeople()}
            </div>
            
        )
    }
}