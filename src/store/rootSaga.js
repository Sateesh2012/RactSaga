import { all } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import postSaga from "./posts/sagas";
import postListV2Saga from "./post-list-v2/sagas";

export default function* rootSaga() {
  // yield all([...postListV2Saga]);
  yield all([...authSaga, ...postSaga]);
}
