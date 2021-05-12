import { all } from 'redux-saga/effects';

import productSagas from './mapProductSagas';

export default function* root() {
  yield all([...productSagas]);
}
