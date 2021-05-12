import React from 'react';
import { Text } from 'react-native';
import styles from './HomeScreenStyle';
import HeaderBar from './HeaderBar/HeaderBar';

function HomeScreen() {
  return (
    <>
      <HeaderBar />
      <Text>Hello World</Text>
    </>
  );
}

export default HomeScreen;
