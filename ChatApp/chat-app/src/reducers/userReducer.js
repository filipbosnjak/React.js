const initialState = {
  user: null,
  value: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        value: 1,
      };
    case "LOGOUT":
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

export default userReducer;
