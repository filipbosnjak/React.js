import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export class UserDetails extends Component {

    continue = (event) => {
        event.preventDefault();
        this.props.next();
    }
    goBack = (event) => {
        event.preventDefault();
        this.props.prev();
    }
    render() {

        const {values,handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <>
                <AppBar title="Enter Your Information"/>

                <TextField 
                className='TextField'
                hintText='First Name...'
                floatingLabelText = 'First Name...'
                onChange = {handleChange('firstName')}
                defaultValue = {values.firstName}/>

                <br/>

                <TextField 
                className='TextField'
                hintText='Last Name...'
                floatingLabelText = 'Last Name...'
                onChange = {handleChange('lastName')}
                defaultValue = {values.lastName}/>

                 <br/>

                <TextField 
                className='TextField'
                hintText='Email...'
                floatingLabelText = 'Email...'
                onChange = {handleChange('email')}
                defaultValue = {values.email}/>

                <br/>

                <RaisedButton
                label="Next"
                primary={1}
                className="nxtBtn"
                onClick ={this.continue}
                />
                </>
                
            </MuiThemeProvider>
            
        )
    }
}

export default UserDetails;