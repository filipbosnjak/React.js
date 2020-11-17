const initialState = {
  base: "",
  toppings: [],
};

const addTopping = (toppings, topping) => {
  let newToppings = [];
  console.log(toppings);
  if (!toppings.includes(topping)) {
    newToppings = [...toppings, topping];
  } else {
    newToppings = toppings.filter((currentTopping) => {
      return currentTopping !== topping;
    });
  }

  return newToppings;
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
        toppings: addTopping(state.toppings, action.payload.topping),
      };
    default:
      return state;
  }
};
