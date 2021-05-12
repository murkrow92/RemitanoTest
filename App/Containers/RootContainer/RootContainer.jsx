import React from 'react';
import { View } from 'react-native';
import WithNetworkListener from 'Business/WithNetworkListener';

import styles from './RootContainerStyle';

function RootContainer(props) {
  return <View style={styles.applicationView}></View>;
}

export default WithNetworkListener(RootContainer);
