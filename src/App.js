// create your App component here
import React from "react";

export default class App extends React.Component {
    contructor() {
        

    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            return data.number;
        })
    }

    render() {
        return(
            null
        )
    }
}