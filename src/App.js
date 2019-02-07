import React, {Component} from 'react'

// create your App component here
class App extends Component {


  componentDidMount(){
    const URL = ' http://api.open-notify.org/astros.json'
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
  }

  render(){
    <div>
    </div>
  }

}

export default App;
