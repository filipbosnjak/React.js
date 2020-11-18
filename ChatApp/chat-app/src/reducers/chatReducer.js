const initialState = {
  chatId: null,
  chatName: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHAT":
      return {
        chatId: action.payload.chatId,
        chatName: action.payload.chatName,
      };
    default:
      return state;
  }
};
export default chatReducer;
