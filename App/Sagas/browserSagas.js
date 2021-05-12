import { call, put } from 'redux-saga/effects';
import ProductActions from 'Reduxes/Actions/ProductActions';
import API from 'Services/API';

export function* fetchProductList(action) {
  const response = yield call(API.fetchProductList);
  const nextAction = response.status
    ? ProductActions.fetchProductListSuccess
    : ProductActions.fetchProductListFailure;
  yield put(nextAction(response?.data));
}
