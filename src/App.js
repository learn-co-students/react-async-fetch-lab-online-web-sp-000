// create your App component here

import React, { Component } from 'react';
//import './App.css';

export default class App extends Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
    }

    render(){
        
    }

}