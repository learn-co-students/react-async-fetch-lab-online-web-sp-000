// create your App component hereclass App extends Component {
import React from "react"

class App extends React.Component {
  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then(data => data.json())
      .then(people => this.setState({ people }))
  }

  render() {
    return
  }
}

export default App
