import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import NoTodos from "./NoTodos";

export class Todos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todos">
        {todos[0] ? (
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
            );
          })
        ) : (
          <NoTodos />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer,
  };
};
//const mapDispatchToProps = (dispatch) => {};
//If no action or state needed we just dont define it

export default connect(mapStateToProps, null)(Todos);
