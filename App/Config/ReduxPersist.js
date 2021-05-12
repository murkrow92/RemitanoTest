import AsyncStorage from '@react-native-community/async-storage';
import immutablePersistenceTransform from 'Services/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    whitelist: ['product'],
    stateReconciler: false,
    transforms: [immutablePersistenceTransform]
  }
};

export default REDUX_PERSIST;
