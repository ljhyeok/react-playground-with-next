import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';
import { Context, createWrapper } from 'next-redux-wrapper';
import reducer from './reducer/sampel.reducer';
import rootSaga from './saga/sample.saga';

export interface SagaStore extends Store {
  sagaTask: Task;
}

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper<SagaStore>(makeStore as any);
