import React, {Component} from 'react';

export default class App extends Component {
    
    state = {
        peopleInSpace: []
    }
    
    
    
    
    
    render (){
return(
    <div>
        {this.state.peopleInSpace.map(person => person.name)}
    </div>
)
    }


    componentDidMount(){
        let url = 'http://api.open-notify.org/astros.json'
        fetch(url)
        .then(res => res.json())
        .then(data =>({
            peopleInSpace: data.people
        }))
    }
    
}
