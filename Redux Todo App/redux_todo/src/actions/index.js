export const addTodo = (text, id) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      id: id,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id: id,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id: id,
    },
  };
};
export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};
