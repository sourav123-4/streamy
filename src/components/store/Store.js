import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/index';
import mySaga from '../saga/MySaga';
import createSagaMiddleware from '@redux-saga/core';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;