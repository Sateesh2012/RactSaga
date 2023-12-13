import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import authReducer from "./auth/reducer";
import postReducer from "./posts/reducer";
import postListV2Reducer from "./post-list-v2/reducer";

export default combineReducers({
  // counter: counterReducer,
  // postListV2: postListV2Reducer,
  auth: authReducer,
  post: postReducer,
});
