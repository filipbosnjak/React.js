import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import { completedTodo } from "../actions";

export class Todo extends Component {
  //Not necessary
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, text, completedTodo, deleteTodo, completed } = this.props;
    return (
      <div className="todo" key={id}>
        <div className={completed ? "overlined text" : "text"}>{text}</div>
        <button className="done" onClick={() => completedTodo(id)}>
          Done
        </button>
        <button className="delete" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    completedTodo: (id) => {
      dispatch(completedTodo(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
