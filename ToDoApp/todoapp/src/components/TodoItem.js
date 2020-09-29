import React, { Component } from 'react';

import PropTypes from 'prop-types';


class TodoItem extends Component {
    render() {
        return (
            <div className="todo">
                <input type="checkbox" id={`${this.props.todo.id}`}/>
                <label htmlFor={`${this.props.todo.id}`}> {/* We can pass class names or whatever we want inside JSX tags like this */}
                    <i className="fas fa-check"></i>
                    <span className="label">{this.props.todo.title}</span>{/* todo objects are being passed here as props and we can use them like this*/}
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
