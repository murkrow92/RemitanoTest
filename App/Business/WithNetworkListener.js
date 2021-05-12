import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import NetworkActions from 'Reduxes/Actions/NetworkActions';

function WithNetworkListener(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    const networkListener = useCallback(() => {
      function onConnectionChange(connectionInfo) {
        dispatch(NetworkActions.changeConnectionState(connectionInfo));
      }

      const unsubscribe = NetInfo.addEventListener(onConnectionChange);
      return () => {
        unsubscribe();
      };
    }, [dispatch]);

    useEffect(networkListener, [networkListener]);

    return <OriginalComponent {...props} />;
  }

  return WrappedComponent;
}

export default WithNetworkListener;
