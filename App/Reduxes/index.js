import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import createStoreAndMiddleware from './CreateStore';
import rootSaga from 'Sagas';
import ReduxPersist from 'Config/ReduxPersist';

import { reducer as NetworkReducer } from './Reducers/NetworkReducer';
import { reducer as BrowserReducer } from './Reducers/BrowserReducer';
import { reducer as ThemeReducer } from './Reducers/ThemeReducer';

export const reducers = combineReducers({
  network: NetworkReducer,
  theme: ThemeReducer,
  browser: BrowserReducer
});

export default () => {
  const persistConfig = ReduxPersist.storeConfig;
  const finalReducers = ReduxPersist.active
    ? persistReducer(persistConfig, reducers)
    : reducers;
  const { store } = createStoreAndMiddleware(finalReducers, rootSaga);
  return store;
};
