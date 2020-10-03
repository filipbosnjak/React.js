import React, { Component } from 'react';


class Person extends Component{
    state = {
        person:[
            {name:'Filip',age:23},
            {name:'Karla',age:20}
        ]
    }

    render(){
        return(
        this.state.person.map((person) => {
            return <p>{person.name}</p>
        })
        )
    }
}

export default Person;