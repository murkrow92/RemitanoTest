import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  goToHomePage: [],
  search: ['query'],
  goToPage: ['url']
});

export const BrowserTypes = Types;

export default Creators;
