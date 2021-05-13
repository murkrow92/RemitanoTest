import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BrowserActions from 'Reduxes/Actions/BrowserActions';

function WithBrowserBusiness(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    function goToHomePage() {
      dispatch(BrowserActions.goToHomePage());
    }

    function goToPage(url) {
      dispatch(BrowserActions.goToPage(url));
    }

    return (
      <OriginalComponent
        goToPage={goToPage}
        goToHomePage={goToHomePage}
        {...props}
      />
    );
  }

  return WrappedComponent;
}

export default WithBrowserBusiness;
