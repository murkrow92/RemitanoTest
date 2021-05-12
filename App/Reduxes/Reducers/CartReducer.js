import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { CartTypes } from 'Reduxes/Actions/CartActions';

export const INITIAL_STATE = Immutable({
  tempCart: {}
});

function changeQuantity(state, action) {
  const { amount, product } = action;
  const { id } = product;
  const { quantity } = state;
  return state.setIn(['tempCart', id], {
    quantity: quantity + amount,
    ...product
  });
}

export const reducer = createReducer(INITIAL_STATE, {
  [CartTypes.CHANGE_QUANTITY]: changeQuantity
});
