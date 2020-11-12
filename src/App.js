// create your App component here
import React, {Component} from "react"

class App extends Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then((response) => {
            return response.json()
        }).then((data) => {
            console.log('data', data)
        }) 
    }

    // componentDidMount = () => {
    //     fetch("http://api.open-notify.org/astros.json").then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         console.log('data', data)
    //     })
    // }

    // componentDidMount = () => {
    //     fetch("http://api.open-notify.org/astros.json").then(response => response.json()).then(data => {
    //         console.log('data', data)
    //     })
    // }

    render() {

        return <div>App</div>

    }
}

export default App