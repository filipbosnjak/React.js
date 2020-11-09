import React, { useReducer, useState } from "react";

function TodoApp() {
  const initialState = [];

  const ACTIONS = {
    ADD_TODO: "addtodo",
    DEL_TODO: "deltodo",
  };

  const newTodo = (name) => {
    return {
      id: Date.now(),
      name: name,
      completed: false,
    };
  };

  const deleteTodo = (state, index) => {
    let newTodos = [...state];
    newTodos.splice(index, 1);
    return newTodos;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, newTodo(action.payload.name)];
      case ACTIONS.DEL_TODO:
        return deleteTodo(state, action.payload.index);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Add Todo..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {state[0] ? (
        state.map((todo, index) => {
          return (
            <div className="todo" key={todo.id}>
              <p>
                {index + 1}.) {todo.name}
              </p>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.DEL_TODO,
                    payload: { index: index },
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <p>No todos yet</p>
      )}
    </div>
  );
}

export default TodoApp;
