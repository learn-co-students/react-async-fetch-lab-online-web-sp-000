// create your App component here

import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
  }

  render() {
    return (
      null
    );
  }
}

export default App;