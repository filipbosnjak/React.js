import React, { Component } from "react";
import TodoItem from './TodoItem'
// PropTypes
//-> Validation of properties that a component should have.

import PropTypes from 'prop-types'

class Todos extends Component{
    render(){
        //console.log(this.props.todos);/* We access the props with props keyword */
        return(
            
            this.props.todos.map( (todo) => ( //We're iterating trough the array of obj and each element should get a key
            /*<h3>{todo.title}</h3>*/         //Otherwise we get a warning: Each child in a list should have a unique "key" prop.
            <TodoItem key={todo.id}  todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/> //Todo - that one from the arrow function argument is being passed
            ))                        //as a prop named todo - {todo}
        );
    }
}

//Here we define proptypes
// Todos.propTypes -> propTypes p shouldnt be capital
//We put an array.isRequired because what we are passing as props is an ARRAY of objects
//In TodoItem for eg. we have a single object
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;