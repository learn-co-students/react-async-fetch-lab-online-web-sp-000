// create your App component here
import React from 'react'


class App extends React.Component {

   componentDidMount(){
       fetch(`http://api.open-notify.org/astros.json`)
       .then(resp => resp.json())
       .then(json_resp => console.log(json_resp))
   }



    render(){
        return(
            <div>
                Hi.
            </div>
        )
    }
}

export default App;