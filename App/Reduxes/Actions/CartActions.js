import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  changeQuantity: ['product', 'amount']
});

export const CartTypes = Types;

export default Creators;
