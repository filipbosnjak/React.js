import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions";
import AddTodo from "../components/AddTodo";

//This function takes state as an argument and returns an object
//-wherein it creates a key for todos and assigns the todos in
//state as the value.
const mapStateToProps = (state) => {
  return { todos: state.todosReducer, title: "Tifasdtle" };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, id) => {
      dispatch(addTodo(text, id)); //Here we defined handleSubmit and we fire a dispatch from there. Dispatch calls addTodo from actions
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

// Containers act as the middle men between the Redux store that knows about state,
// and the presentation component ready to render it on the page.
