import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  changeConnectionState: ['connectionInfo']
});

export const BrowserTypes = Types;

export default Creators;
