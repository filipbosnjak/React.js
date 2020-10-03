import React, { Component } from 'react';


class Person extends Component{

    state = {
        person:[
            {id:Math.round(Math.random()*10000000),name:'Filip',age:23},
            {id:Math.round(Math.random()*10000000),name:'Karla',age:20},
            {id:Math.round(Math.random()*10000000),name:'Name',age:234}
        ],
        visible:true
    }

    toggler = () => {
       //return !this.state.visible -> Not good
       this.setState({visible: !this.state.visible})
    }
    nameChangedHandler = (event,id) => {
        
        const idx = this.state.person.findIndex( (person) => {
            return person.id === id;
        } )
        
        let newPerson = this.state.person;
        
        newPerson[idx].name = event.target.value;

        this.setState({...newPerson})
        /*this.setState({person:[
            {id:1,name:event.target.value,age:23},
            {id:2,name:'Karla',age:20}
        ]})
        console.log(idx)*/
        
        event.target.value = '';
    }
        
    render(){

        return(
        
        <div>
        {this.state.person.map((person) => {
            return (
            <p key={person.id}>{person.name} : {person.age}</p> //Each element of the list should have unique key. 
            )
        })
        }
        <button onClick={ () => this.toggler(this.state.visible) }>Remove</button>
        <input type="text" placeholder='name' onKeyPress={(e) => {
            if(e.key==='Enter'){ //Updates when enter is pressed
                console.log(e.key);
                return this.nameChangedHandler(e,this.state.person[0].id)
            }
        }}
        /> {/**Event object passed here automatically like in plain js */}
        </div>
        
        )
    }
}

export default Person;