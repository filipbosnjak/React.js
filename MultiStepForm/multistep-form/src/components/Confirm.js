import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';

class Confirm extends Component {

    continue = (event) => {
        event.preventDefault();
        //Sending form to processing in the backend 
        this.props.next(); 
    }
    goBack = (event) => {
        event.preventDefault();
        this.props.prev();
    }

    render() {

        const { values: {firstName,lastName,email,occupation,city,bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm your information'/>

                    <List>
                        
                        <ListItem 
                            className='listItem'
                            primaryText='First Name'
                            secondaryText={firstName}
                        />
                        <ListItem 
                            primaryText='Last Name'
                            secondaryText={lastName}
                        />
                        <ListItem 
                            primaryText='Email'
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText='Occupation'
                            secondaryText={occupation}
                        />
                        <ListItem 
                            primaryText='City'
                            secondaryText={city}
                        />
                        <ListItem 
                            primaryText='Bio'
                            secondaryText={bio}
                        />
                        <div className='btns'>
                        <RaisedButton
                        label="Back"
                        primary={0}
                        className="nxtBtn"
                        onClick ={this.goBack}
                        />
                        <RaisedButton
                        label="Confirm"
                        primary={1}
                        className="nxtBtn"
                        onClick ={this.continue}
                        />
                        </div>

                    </List>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm;