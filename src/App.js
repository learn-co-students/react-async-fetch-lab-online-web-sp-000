import React, {Component} from 'react'


class App extends Component {
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}

export default App
