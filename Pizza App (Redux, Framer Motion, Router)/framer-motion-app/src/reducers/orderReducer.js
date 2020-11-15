const initialState = {
  base: "",
  toppings: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BASE":
      return {
        ...state,
        base: action.payload.base,
      };
    case "ADD_TOPPING":
      return {
        ...state,
        toppings: [...state.toppings, ...action.payload.toppings],
      };
    default:
      return state;
  }
};
