import React, { Component } from "react"


class App extends React.Component {
  state = {
  peopleInspace: []

  }

    render() {
        return(
       <div> 
       {this.state.peopleInspace.map(person=> person.name)}
       
       </div>


        )
    }

 componentDidMount() {
     fetch('http://api.open-notify.org/astros.json')
     .then(response => response.json())
     .then(data => {
         this.setState ({
             peopleInspace: data.people
         })
     })
 }

}








export default  App