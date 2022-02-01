import { ADD_TODO } from "./actions";

import { takeEvery } from "redux-saga/effects";

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, function* () {
    //we can perform async operations here
  });
}

export default function* () {
  yield* watchAddTodo();
}
