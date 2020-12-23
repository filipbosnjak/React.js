const initialState = {};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COORDS_URL":
      return {
        ...action.payload,
      };
    case "CITY_URL":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
