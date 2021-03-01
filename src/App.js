// create your App component here
// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, 
// send a fetch request to http://api.open-notify.org/astros.json, 
// a free API that returns a list of people currently in space.
import React from 'react';

class App extends React.Component {

   render() {
      return (
         <div className='container'>
            <h2>People in space</h2>
            <ul className='people-in-space'>
            </ul>
         </div>
      )
   }

   componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
         .then(res => res.json()) 
         .then(data => {
            const spacePeopleList = document.querySelector('.people-in-space');
            data.people.forEach(person => {
               spacePeopleList.innerHTML += 
                  `
                  <li>${person.name}</li>
                  `
            });
         })
   }
}


export default App;