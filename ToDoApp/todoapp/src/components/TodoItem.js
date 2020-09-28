import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.todo.title}</h3>
            </div>
        );
    }
}

export default TodoItem;
