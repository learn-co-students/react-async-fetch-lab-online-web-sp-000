// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
    state = {
        peopleInSpace: []
      }

    render() {
        return (
      <div>
          <ul>
            {this.state.peopleInSpace.map((person, i) => {
                return <li key={i}>{person.name}</li>
            }
            )}
        </ul>
      </div>
    )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(res => res.json())
          .then(data => {
            this.setState({
              peopleInSpace: data.people
            })
          })
      }

}