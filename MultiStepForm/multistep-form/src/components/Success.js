import { AppBar } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import React, { Component } from 'react'

export default class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success!"/>
                    <h1 className="h1">Form submitted successfully<span className='dot'>.</span></h1>
                    <h2 className="h1">Thank you!</h2>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
