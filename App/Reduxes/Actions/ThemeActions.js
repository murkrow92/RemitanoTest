import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setCurrentScreenName: ['screenName']
});

export const ThemeTypes = Types;

export default Creators;
