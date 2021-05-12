import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { NetworkTypes } from 'Reduxes/Actions/NetworkActions';

export const INITIAL_STATE = Immutable({
  isConnected: true
});

function changeConnectionState(state, action) {
  const { connectionInfo } = action;
  return state.merge({
    isConnected: connectionInfo.isConnected
  });
}

export const reducer = createReducer(INITIAL_STATE, {
  [NetworkTypes.CHANGE_CONNECTION_STATE]: changeConnectionState
});
