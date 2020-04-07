import React from 'react';

export default class App extends React.Component {
    componentDidMount() {
         
    }
    render(){
        return(
           fetch("http://api.open-notify.org/astros.json")
        )
    }
}