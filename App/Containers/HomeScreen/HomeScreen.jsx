import React, { useRef, useState } from 'react';
import { Text, RefreshControl, ScrollView } from 'react-native';
import { TOMATO, WHITE } from 'Themes/Colors';
import { WebView } from 'react-native-webview';
import HeaderBar from './HeaderBar/HeaderBar';
import styles from './HomeScreenStyle';

function HomeScreen() {
  const webview = useRef(null);

  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const wevViewStyle = {
    height: scrollViewHeight
  };

  function onLayout(event) {
    setScrollViewHeight(event.nativeEvent.layout.height);
  }

  function onRefresh() {
    webview.current.reload();
  }

  return (
    <>
      <HeaderBar />
      <ScrollView
        style={styles.scrollContainer}
        onLayout={onLayout}
        refreshControl={
          <RefreshControl
            refreshing={false}
            enabled={false}
            onRefresh={onRefresh}
            tintColor={TOMATO}
            colors={[WHITE]}
            style={styles.refreshControl}
          />
        }>
        <WebView
          source={{ uri: 'https://google.com' }}
          ref={webview}
          style={wevViewStyle}
        />
      </ScrollView>
    </>
  );
}

export default HomeScreen;
