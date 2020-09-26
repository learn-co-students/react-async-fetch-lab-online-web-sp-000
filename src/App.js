import React, {Component} from 'react';


class App extends Component {
    render(){
        return <p>Hello people in Space!</p>
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => console.log(data))
    }
}

export default App;