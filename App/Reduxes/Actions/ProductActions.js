import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchProductList: [],
  fetchProductListSuccess: ['productList'],
  fetchProductListFailure: [],
  filterProductList: ['query']
});

export const ProductTypes = Types;

export default Creators;
