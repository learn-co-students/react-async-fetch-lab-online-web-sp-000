import React, {Component} from 'react';

export default class App extends Component {
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(json => this.setState({data: json}))
        
    }

    render() {
        return (
            ''
        )
    }
}