import React, { Component } from 'react';

import PropTypes from 'prop-types';


class TodoItem extends Component {
    render() {
        return (
            <div className="todo">
                <input type="checkbox" id="do"/>
                <label htmlFor="do">
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
