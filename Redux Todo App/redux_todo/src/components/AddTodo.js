import React, { Component } from "react";
import Todo from "./Todo";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  //We get handleSubmit from store via props

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.text);
  //   this.setState({ text: "" });
  // };
  render() {
    const { handleSubmit, todos, deleteTodo } = this.props;
    //console.log(todos);
    // let arr = [1, 2, 3, 4, 5];
    // console.log(
    //   arr.filter((item) => {
    //     return item !== 3;
    //   })
    // );

    return (
      <React.Fragment>
        <div className="addTodo">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(this.state.text, Date.now());
              this.setState({ text: "" });
            }}
            className="form"
          >
            <input
              type="text"
              value={this.state.text}
              placeholder="Add Todo..."
              onChange={(e) => {
                this.setState({ text: e.target.value });
              }}
            />
            <button className="add" type="submit">
              Add
            </button>
          </form>
          {/* <div>{this.props.title}</div> */}
        </div>
        <div className="todos">
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default AddTodo;
