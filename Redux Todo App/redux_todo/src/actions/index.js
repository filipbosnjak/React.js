export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
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
export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};
export const completedTodo = (id) => {
  return {
    type: "COMPLETED_TODO",
    payload: {
      id: id,
    },
  };
};
