const initialState = {
  text: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      console.log(action.payload);
      return {
        text: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
