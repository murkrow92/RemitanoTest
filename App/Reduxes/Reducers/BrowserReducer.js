import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { BrowserTypes } from 'Reduxes/Actions/BrowserActions';

const DEFAULT_HOME_PAGE = 'https://google.com';

export const INITIAL_STATE = Immutable({
  homePage: DEFAULT_HOME_PAGE,
  currentPage: 'https://facebook.com',
  history: []
});

const gotoHomePage = (state, action) => {
  return state.merge({
    currentPage: DEFAULT_HOME_PAGE
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [BrowserTypes.GO_TO_HOME_PAGE]: gotoHomePage
});
