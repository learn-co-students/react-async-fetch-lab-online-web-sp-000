import React from 'react'

class App extends React.Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => data)
    }

    render(){

    }

}

export default App