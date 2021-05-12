import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import Rehydration from 'Services/Rehydration';
import ReduxPersist from 'Config/ReduxPersist';

function createStoreAndMiddleware(rootReducer, rootSaga) {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(rootReducer, compose(...enhancers));
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  const sagasManager = sagaMiddleware.run(rootSaga);
  return {
    store,
    sagasManager,
    sagaMiddleware
  };
}

export default createStoreAndMiddleware;
