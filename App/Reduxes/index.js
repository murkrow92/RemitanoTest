import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import createStoreAndMiddleware from './CreateStore';
import rootSaga from 'Sagas';
import ReduxPersist from 'Config/ReduxPersist';

import { reducer as ProductReducer } from './Reducers/ProductReducer';
import { reducer as NetworkReducer } from './Reducers/NetworkReducer';
import { reducer as ThemeReducer } from './Reducers/ThemeReducer';
import { reducer as CartReducer } from './Reducers/CartReducer';

export const reducers = combineReducers({
  product: ProductReducer,
  network: NetworkReducer,
  theme: ThemeReducer,
  cart: CartReducer
});

export default () => {
  const persistConfig = ReduxPersist.storeConfig;
  const finalReducers = ReduxPersist.active
    ? persistReducer(persistConfig, reducers)
    : reducers;
  const { store } = createStoreAndMiddleware(finalReducers, rootSaga);
  return store;
};
