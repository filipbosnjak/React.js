// const addTodo = (state, action) => {
//   return [
//     ...state,
//     {
//       id: action.payload.id,
//       text: action.payload.text,
//       completed: false,
//     },
//   ];
// };

const todoReducer = (state = [], action) => {
  //state = [] -> We pass the state and as a default parameter empty array
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ];
    //addTodo(state, action);
    case "TOGGLE_TODO":
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => {
        //console.log(todo);
        //console.log(action);
        return todo.id !== action.payload.id;
      });
    case "CLEAR_ALL":
      return [];
    case "COMPLETED_TODO":
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
