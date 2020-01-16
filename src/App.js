import React from 'react'


class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        peopleInSpace:data.people
      })
    })
  }




  render(){
    return(
        <div></div>
    )
  }
}
export default App
