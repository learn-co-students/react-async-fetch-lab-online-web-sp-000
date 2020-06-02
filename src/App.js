// create your App component here

import React from 'react'

class App extends React.Component {
state={
  people:[]
}


componentDidMount(){
  fetch ('http://api.open-notify.org/astros.json')
  .then (response => response.json())
  .then (data => {
    this.setState ({
     people: data.people})
    })
  }


render(){
  return(
    <div>{this.state.people.map(person=> <div> {person.name} </div>)}</div>
  )
}



}

export default App
