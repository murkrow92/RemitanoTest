import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ProductTypes } from 'Reduxes/Actions/ProductActions';
import products from 'Fixtures/products.json';
import score from 'string-score';
import lodash from 'lodash';
import { Text } from 'react-native';

export const INITIAL_STATE = Immutable({
  isLoading: false,
  productList: products,
  query: '',
  filterProductList: products
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

  const filterResult =
    query.length > 0 ? filter(productList, query) : productList;

  return state.merge({
    query: query,
    filterProductList: filterResult
  });
};

function filter(productList, query) {
  const filteredArray = productList.filter(function (product) {
    return score(product.name, query) > 0.4;
  });
  const mutableArray = [];
  lodash.forEach(filteredArray, function (element) {
    mutableArray.push({
      ...element
    });
  });

  mutableArray.sort(function (current, next) {
    return score(next.name, query) - score(current.name, query);
  });

  return mutableArray;
}

export const reducer = createReducer(INITIAL_STATE, {
  [ProductTypes.FETCH_PRODUCT_LIST_SUCCESS]: fetchProductListSuccess,
  [ProductTypes.FETCH_PRODUCT_LIST]: fetchProductList,
  [ProductTypes.FETCH_PRODUCT_LIST_FAILURE]: fetchProductListFailure,
  [ProductTypes.FILTER_PRODUCT_LIST]: filterProductList
});
