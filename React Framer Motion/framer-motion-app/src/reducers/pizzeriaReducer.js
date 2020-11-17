const initialState = {
  bases: ["Classic", "Thin & Crispy", "American", "Thic Crust", "Italian"],
  toppings: [
    "mushrooms",
    "peppers",
    "very hot peppers",
    "onions",
    "sour cream",
    "hot sauce",
    "olives",
    "extra cheese",
    "tomatoes",
    "peperoncini special",
    "pineapple",
  ],
};

//Reducer for pizzeria app admin - here an admin user can add and remove parts dependning on the pizzeria stock
export const pizzeriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BASE":
      return {
        ...state,
        bases: [...state.bases, action.payload.newBase],
      };
    default:
      return state;
  }
};
