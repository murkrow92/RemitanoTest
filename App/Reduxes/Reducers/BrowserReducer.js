import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { BrowserTypes } from 'Reduxes/Actions/BrowserActions';

const DEFAULT_HOME_PAGE = 'https://google.com';
const DEFAULT_FACEBOOK_PAGE = 'https://facebook.com';
const DEFAULT_NETFLIX_PAGE = 'https://netflix.com';

export const INITIAL_STATE = Immutable({
  homePage: DEFAULT_HOME_PAGE,
  currentPage: 'https://facebook.com',
  bookmarkPage: [
    DEFAULT_HOME_PAGE,
    DEFAULT_FACEBOOK_PAGE,
    DEFAULT_NETFLIX_PAGE
  ],
  history: [DEFAULT_HOME_PAGE, DEFAULT_FACEBOOK_PAGE, DEFAULT_NETFLIX_PAGE],
  query: ''
});

const gotoHomePage = (state, action) => {
  return state.merge({
    currentPage: DEFAULT_HOME_PAGE
  });
};

const onSearch = (state, action) => {
  const { query } = action;
  return state.merge({
    query: query
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [BrowserTypes.GO_TO_HOME_PAGE]: gotoHomePage,
  [BrowserTypes.SEARCH]: onSearch
});
