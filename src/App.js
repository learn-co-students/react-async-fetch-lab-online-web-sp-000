// create your App component here
import React from 'react'

export default class App extends React.Component {
  
  componentDidMount() {
    return fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(people => people)
      .catch(error => console.log(error))
  }
  
  render() {
    return(
      <h1> I am in the app now </h1>  
    )
  }
  
}