// create your App component here
import React, {Component} from 'react';

class App extends Component {
    render (){
        return null
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
    }
}

export default App