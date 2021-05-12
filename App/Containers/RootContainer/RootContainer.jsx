import React from 'react';
import { View } from 'react-native';
import WithNetworkListener from 'Business/WithNetworkListener';

import Statusbar from 'App/Components/Statusbar/Statusbar';
import styles from './RootContainerStyle';
import Router from './Router';

function RootContainer(props) {
  return (
    <View style={styles.applicationView}>
      <Statusbar />
      <Router />
    </View>
  );
}

export default WithNetworkListener(RootContainer);
