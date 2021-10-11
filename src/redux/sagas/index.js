import axios from "axios";
import { put, call, takeEvery, all, takeLeading } from "redux-saga/effects";

// Editing data
function* workerPutFoodSaga({ updatedMeal }) {
  try {
    yield call(
      axios.put,
      `https://616205fa374925001763153b.mockapi.io/api/seafood/${updatedMeal.id}`,
      updatedMeal
    );
    yield put({
      type: "PUT_DATA",
      updatedMeal,
    });
    yield put({ type: "FETCH_DATA" });
    console.log("Success edit =>", updatedMeal);
  } catch (e) {
    console.log(`Put request failed: ${e}`);
  }
}

export function* watchPutFoodSaga() {
  yield takeLeading("PUT_DATA", workerPutFoodSaga);
}

// Fetching data
export function* workerGetFoodSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://616205fa374925001763153b.mockapi.io/api/seafood"
    );
    yield put({ type: "SET_FOOD", payload: response.data });
  } catch (e) {
    console.log(`Get request failed: ${e}`);
  }
}

export function* watchGetFoodSaga() {
  yield takeEvery("FETCH_DATA", workerGetFoodSaga);
}

export function* rootSaga() {
  yield all([watchGetFoodSaga(), watchPutFoodSaga()]);
}
