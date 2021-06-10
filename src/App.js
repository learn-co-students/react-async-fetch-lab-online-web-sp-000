// create your App component here
import React, {Component} from 'react';
import index from './index'


class App extends Component {
state = {
    peopleInSpace: []
}
render (){
    return (
        <div>
            {this.state.peopleInSpace.map(person => person.name)}
        </div>    
        )
}


componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data =>{
        peopleInSpace: data.people
    })
}}
 export default App