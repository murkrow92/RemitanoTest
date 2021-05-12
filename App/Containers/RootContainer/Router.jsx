import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import doNothing from 'Utils/doNothing';
import HomeScreen from '../HomeScreen/HomeScreen';

const MainStack = createStackNavigator();

function Router({ onStateChange }) {
  return (
    <NavigationContainer onStateChange={onStateChange}>
      <MainStack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

Router.defaultProps = {
  onStateChange: doNothing
};

export default Router;
