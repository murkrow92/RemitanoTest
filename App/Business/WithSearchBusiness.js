import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import lodash from 'lodash';
import BrowserActions from 'Reduxes/Actions/BrowserActions';

function WithSearchBusiness(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    const memorizedCallback = lodash.debounce(
      useCallback(
        text => {
          dispatch(BrowserActions.search(text));
        },
        [dispatch]
      )
    );

    return <OriginalComponent onSearch={memorizedCallback} {...props} />;
  }

  return WrappedComponent;
}

export default WithSearchBusiness;
