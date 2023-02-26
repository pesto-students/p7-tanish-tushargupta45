const initialState = {
  isOn: true,
};

const actions = Object.freeze({
  flipSwitch: "flipSwitch",
});

function roomReducer(currentState = initialState, action) {
  switch (action.type) {
    case actions.flipSwitch:
      return { ...currentState, isOn: !currentState.isOn };
    default:
      return currentState;
  }
}

export default roomReducer;
