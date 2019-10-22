import React, { Component } from 'react'

export default class App extends React.PureComponent {
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => this.setState({data: data}))
  }
  render(){
    return(
      <div>
      "YEAH!!"
      </div>
    )
  }

}
