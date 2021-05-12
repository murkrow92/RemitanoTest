import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WithStatusbarChange from 'Business/Themes/WithStatusbarChange';
import ProductListScreen from 'Containers/Product/ProductListScreen/ProductListScreen';
import ProductDetailScreen from 'Containers/Product/ProductDetailScreen/ProductDetailScreen';
import doNothing from 'Utils/doNothing';

const MainStack = createStackNavigator();

function Router({ onStateChange }) {
  return (
    <NavigationContainer onStateChange={onStateChange}>
      <MainStack.Navigator
        headerMode="none"
        initialRouteName="ProductListScreen">
        <MainStack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
        />
        <MainStack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

Router.defaultProps = {
  onStateChange: doNothing
};

export default WithStatusbarChange(Router);
