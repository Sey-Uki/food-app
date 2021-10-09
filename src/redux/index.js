import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMidleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMidleware));

sagaMidleware.run(rootSaga);