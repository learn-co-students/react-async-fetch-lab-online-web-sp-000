import React from 'react';

export default class App extends React.Component {
    state = {
        people: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => this.setState({people: json.people}))
        }
    
    
    render() {
        return (
            <div>
                {this.state.people}
            </div>
        )
    }

}