// create your App component here
import React from 'react'



class App extends React.Component {
  constructor() {
    super()
    this.state = {number: ''}
      }

componentDidMount(){
  fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => this.setState({number: json.number}))
    // .then(json => console.log(json.number));
  };





  render() {
    return (
      <div>
      There are {this.state.number} people in space.
      </div>
    )
  }
}
export default App
