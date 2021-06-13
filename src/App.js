// create your App component here
import React, { Component } from 'react';


//no need to modify anything in this component
class App extends Component {
    constructor(){
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    render() {
        console.log(this.state)
        return (
          <div>
              {this.people()}
          </div>
        );
      }
    people = ()=>{
       return  this.state.peopleInSpace.map((person)=>{
            return (
               <h3>{person.name}</h3>
            )
 
        })
    }

    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
           peopleInSpace: data.people
        })

      })

    }

}



// }

export default App;
