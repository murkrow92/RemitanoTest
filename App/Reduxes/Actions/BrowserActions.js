import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  goToHomePage: [],
  search: ['query']
});

export const BrowserTypes = Types;

export default Creators;
