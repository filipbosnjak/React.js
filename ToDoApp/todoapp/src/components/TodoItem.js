import React, { Component } from 'react';

import PropTypes from 'prop-types';


class TodoItem extends Component {

    markComplete = (e) => {// We want this function to, when triggered, change the state. Problem is that STATE is up the tree above in App.js so we have to climb that tree
        
    }
    delTodo = () => {
        //console.log('clicked');
    }

    render() {

        const {id , title} = this.props.todo;

        return (
            <div className="todo">
                                                                        {/*.bidn() - we can "pass" id like this to the original markComplete up the tree */}
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} id={`${this.props.todo.id}`}/>{/*If ticked (onChange) we call a function. We have to pass that function via props */}

                <label htmlFor={`${this.props.todo.id}`}> {/* We can pass class names or whatever we want inside JSX tags like this */}
                    <i className="fas fa-check"></i>
                    <span className="label">{title}</span>{/* todo objects are being passed here as props and we can use them like this*/}
                    <button className="btn" onClick={this.props.delTodo.bind(this,id)}>Delete</button>
                </label> 
                
            </div>
            
        );
    }
}

//Defining proptypes

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem;
