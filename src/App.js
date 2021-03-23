// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json() )
        .then(json => this.setState({data: json}))
    }
    render(){

    }
} 
