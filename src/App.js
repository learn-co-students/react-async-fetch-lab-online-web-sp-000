import React from 'react'

class App extends React.Component {

  state={
    json:''
  }

  componentDidMount(){
     fetch('http://api.open-notify.org/astros.json')
              .then(res=>res.json()).then(json=>{
                this.setState({
                  json
                })
              })


  }
  render () {
    return(
      <div>

      </div>
    )
  }
}

export default App;
