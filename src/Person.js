import React, { Component } from 'react'
import { Card } from './Card'

class Person extends Component {


    render(){
        return (
            <Card>
                <div>
                    <p>Name: {this.props.name}</p>
                    <p>Spacecraft: {this.props.craft}</p>
                </div>
            </Card>
            
        )
    }
}

export { Person }
