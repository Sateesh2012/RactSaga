export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const RESET = "reset";

// Action Creators
export const incrementAction = (payload) => ({
  type: INCREMENT,
  payload: payload,
});

export const decrementAction = (payload) => ({
  type: DECREMENT,
  payload: payload,
});

export const resetAction = () => ({
  type: RESET,
});
