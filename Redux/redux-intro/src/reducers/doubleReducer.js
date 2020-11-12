const initialState = {
  counter2: 1,
};

const doubleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter2: state.counter2 * 2,
      };
    case "DEC":
      return {
        counter2: state.counter2 / 2,
      };
    default:
      return state;
  }
};

export default doubleReducer;
