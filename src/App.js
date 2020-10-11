// create your App component here
import React from "react";

class App extends React.Component {
  render() {
    return "hello"
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => data.people.map(astro => console.log(astro.name)))
  }
}

export default App