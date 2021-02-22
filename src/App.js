import React, {Component} from 'react';

export default class App extends Component {

    state = {
        spaceList: []
    }



    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                spaceList: data.people
            })
        })
    }




    render() {

        return (

                <ul>
                    {this.state.spaceList.forEach( person => {
                        return <li>{person.name}</li>
                    }

                    )}
                </ul>



        )



    }




}