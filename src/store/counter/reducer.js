import { DECREMENT, INCREMENT, RESET } from "./action";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { count: state.count + payload.by };
    case DECREMENT:
      return { count: state.count - payload.by };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default reducer;
