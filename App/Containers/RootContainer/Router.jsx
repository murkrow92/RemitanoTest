import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WithSearchBusiness from 'Business/WithSearchBusiness';
import HomeScreen from '../HomeScreen/HomeScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import doNothing from 'Utils/doNothing';

const MainStack = createStackNavigator();

function Router({ onSearch }) {
  const onStateChange = state => {
    const { index, routeNames } = state;
    const currentScreenName = routeNames[index] ? routeNames[index] : '';
    if (currentScreenName === 'SearchScreen') {
      onSearch('');
    }
  };

  return (
    <NavigationContainer onStateChange={onStateChange}>
      <MainStack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen name="SearchScreen" component={SearchScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

Router.defaultProps = {
  onSearch: doNothing
};

export default WithSearchBusiness(Router);
