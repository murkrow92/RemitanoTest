import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BrowserActions from 'Reduxes/Actions/BrowserActions';

function WithBrowserBusiness(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    function goToHomePage() {
      dispatch(BrowserActions.goToHomePage());
    }

    return <OriginalComponent goToHomePage={goToHomePage} {...props} />;
  }

  return WrappedComponent;
}

export default WithBrowserBusiness;
