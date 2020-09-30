import React, {Component} from 'react';

export class AddTodo extends Component{

    //Component-level state. We use it only in this component. Todos state is App-level state.
    //For the form fields we usually want component-level state.

    state = {
        title: ''
    }

    onChange = (e) => {
        return this.setState({ 
            [e.target.name] : e.target.value //We put e.target.name so we can multiple form fields and we dont have to create onChange methods for each one of them
        })
    }

    render(){
        return(
            <form>
                <input type="text" name="title" className="input" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="inputBtn"/>
            </form>
        )
    }
}

export default AddTodo;