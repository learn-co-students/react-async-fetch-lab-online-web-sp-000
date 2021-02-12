import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(p => p.name)}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then( resp => resp.json() )
            .then( data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

}