import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import lodash from 'lodash';
import score from 'string-score';
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
  searchResult: [],
  history: [DEFAULT_HOME_PAGE, DEFAULT_FACEBOOK_PAGE, DEFAULT_NETFLIX_PAGE],
  query: ''
});

const gotoHomePage = (state, action) => {
  return state.merge({
    currentPage: DEFAULT_HOME_PAGE
  });
};

const gotoPage = (state, action) => {
  const { url } = action;
  return state
    .merge({
      currentPage: url
    })
    .updateIn(['history'], history => history.concat(url));
};

const onSearch = (state, action) => {
  const { query } = action;
  const { history } = state;

  const searchResult =
    query.length > 0
      ? lodash.filter(history, function (element) {
          console.log('ELEMENT:', element);
          console.log('query:', query);
          console.log(score(element, query, 0.5));
          return score(element, query, 0.5) > 0.2;
        })
      : history;

  const sortResult = lodash.sortBy(searchResult, function (currentElement) {
    return score(currentElement, query, 0.5) - 0.2;
  });

  return state.merge({
    query: query,
    searchResult: sortResult.length > 0 ? sortResult : history
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [BrowserTypes.GO_TO_HOME_PAGE]: gotoHomePage,
  [BrowserTypes.GO_TO_PAGE]: gotoPage,
  [BrowserTypes.SEARCH]: onSearch
});
