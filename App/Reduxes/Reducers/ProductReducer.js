import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ProductTypes } from 'Reduxes/Actions/ProductActions';

export const INITIAL_STATE = Immutable({
  isLoading: false,
  productList: [],
  query: '',
  filterProductList: []
});

export const fetchProductList = (state, action) => {
  return state.merge({
    isLoading: true
  });
};

export const fetchProductListSuccess = (state, action) => {
  const { productList } = action;
  return state.merge({
    isLoading: false,
    productList: productList
  });
};

export const fetchProductListFailure = (state, action) => {
  return state.merge({
    isLoading: false
  });
};

export const filterProductList = (state, action) => {
  const { query } = action;
  const { productList } = state;

  return state.merge({
    query: query,
    filterProductList: productList
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ProductTypes.FETCH_PRODUCT_LIST_SUCCESS]: fetchProductListSuccess,
  [ProductTypes.FETCH_PRODUCT_LIST]: fetchProductList,
  [ProductTypes.FETCH_PRODUCT_LIST_FAILURE]: fetchProductListFailure,
  [ProductTypes.FILTER_PRODUCT_LIST]: filterProductList
});
