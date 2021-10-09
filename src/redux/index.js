import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMidleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMidleware)),
);

sagaMidleware.run(rootSaga);