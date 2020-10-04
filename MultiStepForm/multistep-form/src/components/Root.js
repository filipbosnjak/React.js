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

    handleChange = (input,event) => {
        this.setState({[input]:event.target.value});
        //this.setState({[event.target.name]:event.target.value})
    }

    render() {
        const {step} = this.state;
        const {firstName,lastName,email,occupation,city,bio} = this.state;
        const values = {firstName,lastName,email,occupation,city,bio} //We create an object like this firstName,.. = firstName:firstName
        return (
            <div>
                
            </div>
        )
    }
}

export default Root;