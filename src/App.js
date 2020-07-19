import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      astros: null
    }
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`).then(res => res.json())
      .then(res => this.setState({astros: res.people}))
  }

  renderFolks() {
    return this.state.astros.map(astro => {
      <li>{astro.name}</li>
    })
  }

  render() {
    return (
    <ul>{}</ul>
    )
  }
}