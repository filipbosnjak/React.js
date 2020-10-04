import React, { Component } from 'react'
import UserDetails from './UserDetails'

import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';



class Root extends Component {

    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    next = () => {
        const {step} = this.state;
        this.setState({step:step+1});
    }

    prev = () => {
        const {step} = this.state;
        this.setState({step:step-1});
    }

    handleChange = (input) =>(event)=> {
        this.setState({[input]:event.target.value});
        //this.setState({[event.target.name]:event.target.value})
    }

    render() {
        const {step} = this.state;
        const {firstName,lastName,email,occupation,city,bio} = this.state;
        const values = {firstName,lastName,email,occupation,city,bio} //We create an object like this firstName,.. = firstName:firstName
       
        switch(step) {
            case 1: return(
                <UserDetails
                    values={values}
                    next={this.next}
                    handleChange={this.handleChange}
                />
            )

            case 2: return(
                <PersonalDetails
                values={values}
                next={this.next}
                prev={this.prev}
                handleChange={this.handleChange}
                />
            )
            case 3: return(
                <h1>Confirm</h1>
            )
            case 4: return(
                <h1>Success</h1>
            )
        }
    }
}

export default Root;