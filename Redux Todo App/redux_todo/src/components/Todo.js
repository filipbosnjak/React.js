import React, { Component } from "react";

export class Todo extends Component {
  //Not necessary
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, text, completed, deleteTodo } = this.props;
    return (
      <div className="todo" key={id}>
        <p className="text">{text}</p>
        <p className="completed">{JSON.stringify(completed)}</p>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    );
  }
}

export default Todo;
