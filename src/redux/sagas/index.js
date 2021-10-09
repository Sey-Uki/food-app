import {put} from 'redux-saga/effects';

async function getFood() {
  const request = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  const data = await request.json();
  return data.meals;
}

export function* workerFoodSaga() {
  const data = yield getFood();
  yield put({type: 'SET_FOOD', payload: data});
}

export function* watchFoodSaga() {
  yield workerFoodSaga();
}

export function* rootSaga() {
  yield watchFoodSaga();
}