import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  goToHomePage: []
});

export const BrowserTypes = Types;

export default Creators;
