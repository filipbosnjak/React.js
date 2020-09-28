import React, { Component } from "react";
import TodoItem from './TodoItem'

class Todos extends Component{
    render(){
        //console.log(this.props.todos);/* We access the props with props keyword */
        return(
            
            this.props.todos.map( (todo) => ( //We're iterating trough the array of obj and each element should get a key
            /*<h3>{todo.title}</h3>*/         //Otherwise we get a warning: Each child in a list should have a unique "key" prop.
            <TodoItem  todo = {todo}/> //Todo - that one from the arrow function argument is being passed
            ))                        //as a prop named todo - {todo}
        );
    }
}

export default Todos;