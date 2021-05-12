import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { BrowserTypes } from 'Reduxes/Actions/BrowserActions';

export const INITIAL_STATE = Immutable({
  homePage: 'https://google.com',
  currentPage: 'https://google.com',
  history: []
});

export const reducer = createReducer(INITIAL_STATE, {});
