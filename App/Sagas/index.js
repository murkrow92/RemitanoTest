import { all } from 'redux-saga/effects';

import browserSagas from './mapBrowserSagas';

export default function* root() {
  yield all([...browserSagas]);
}
