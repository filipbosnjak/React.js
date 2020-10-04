import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class PersonalDetails extends Component {
    
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
                <React.Fragment>
                    <AppBar title="Enter Your Personal Details"/>
                    <TextField 
                className='TextField'
                hintText='Occupation...'
                floatingLabelText = 'Occupation...'
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation}/>

                <br/>

                <TextField 
                className='TextField'
                hintText='City...'
                floatingLabelText = 'City...'
                onChange = {handleChange('city')}
                defaultValue = {values.city}/>

                 <br/>

                <TextField 
                className='TextField'
                hintText='Bio...'
                floatingLabelText = 'Bio...'
                onChange = {handleChange('bio')}
                defaultValue = {values.bio}/>

                <br/>
                <div className='btns'>
                <RaisedButton
                label="Back"
                primary={0}
                className="nxtBtn"
                onClick ={this.goBack}
                />
                <RaisedButton
                label="Next"
                primary={1}
                className="nxtBtn"
                onClick ={this.continue}
                />
                </div>
               </React.Fragment>
        </MuiThemeProvider>
        )
    }
}

export default PersonalDetails;