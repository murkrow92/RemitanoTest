import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import reduxStore from './App/Reduxes';
import RootContainer from './App/Containers/RootContainer/RootContainer';

enableScreens();
const store = reduxStore();

function BrowserApp() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default BrowserApp;
