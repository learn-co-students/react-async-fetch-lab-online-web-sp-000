// create your App component here
import React,  { Component} from 'react'

class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => data.people)
      .then(people => this.setState({people}))
  }

  render () {
    return (
      <div>
        {this.state.people[0]}
      </div>
    )
  }
}
export default App