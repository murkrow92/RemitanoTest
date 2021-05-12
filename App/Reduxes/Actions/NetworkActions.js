import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  changeConnectionState: ['connectionInfo']
});

export const NetworkTypes = Types;

export default Creators;
