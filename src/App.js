// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div>

      </div>
    );
  }

componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

}

export default App;