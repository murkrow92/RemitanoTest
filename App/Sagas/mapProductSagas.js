import { takeLatest } from 'redux-saga/effects';
import { ProductTypes } from 'Reduxes/Actions/ProductActions';
import { fetchProductList } from './ProductSagas';

const mapProductSagas = [
  takeLatest(ProductTypes.FETCH_PRODUCT_LIST, fetchProductList)
];
export default mapProductSagas;
