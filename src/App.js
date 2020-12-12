import React, { Component } from 'react'

export class App extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(data => {
            this.setState({
              people: data.people
            })
          })
      }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
