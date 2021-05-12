import { persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxPersist from 'Config/ReduxPersist';

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // persistStore(store, null).purge();
        persistStore(store, null);
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null);
      }
    })
    .catch(error => {
      persistStore(store, null);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

const Rehydration = { updateReducers };

export default Rehydration;
