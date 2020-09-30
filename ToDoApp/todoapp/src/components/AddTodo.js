import React, {Component} from 'react';

export class AddTodo extends Component{
    render(){
        return(
            <form>
                <input type="text" name="title" className="input"placeholder="Add Todo..."/>
                <input type="submit" value="Submit" className="inputBtn"/>
            </form>
        )
    }
}

export default AddTodo;