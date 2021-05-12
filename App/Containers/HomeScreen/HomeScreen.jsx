import React from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderBar from './HeaderBar/HeaderBar';
import styles from './HomeScreenStyle';

function HomeScreen() {
  return (
    <>
      <HeaderBar />
      <WebView source={{ uri: 'https://google.com' }} style={{}} />
    </>
  );
}

export default HomeScreen;
