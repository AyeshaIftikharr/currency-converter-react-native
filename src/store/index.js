import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { persistedReducer } from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
