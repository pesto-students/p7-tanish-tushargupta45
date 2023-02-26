const initialState = {
  count: 0,
};

export const actions = Object.freeze({
  INCREMENT: "INCREMENT",
  RESET: "RESET",
});

function counterReducer(currentState = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...currentState, count: currentState.count + 1 };
    case actions.RESET:
      return { ...currentState, count: 0 };
    default:
      return currentState;
  }
}

export default counterReducer;
