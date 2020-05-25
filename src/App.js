// create your App component here
import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(resp => {
      console.log(resp)
    })
  }

  render() {
    return <div></div>
  }

}


export default App