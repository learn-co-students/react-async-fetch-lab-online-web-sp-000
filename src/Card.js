import React, { Component } from 'react'


class Card extends Component{

    render(){
        return(
            <div className="Card">
                {this.props.children}
            </div>
        )
    }
}

export {
    Card
}