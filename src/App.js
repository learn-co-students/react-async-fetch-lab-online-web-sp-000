// create your App component here
import React from 'react'

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            astroList: []
        }
    }

    
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
              <ul>
                  {this.state.astroList.map(astro => {
                      return (
                        <li>
                          {astro.name + " -- " + astro.craft}
                        </li>
                        )
                  })}
              </ul>
            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(astros => {
              this.handleUpdateState(astros.people)
            // console.log(astros.people)
            })
    }

    handleUpdateState = (astrosObj) => {
        astrosObj.forEach(astro => {
            this.setState({
                astroList: [...this.state.astroList, {
                    name: astro.name,
                    craft: astro.craft
                }]
            })
        });
    }
}

export default App 