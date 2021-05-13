import React, { useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WithBrowserBusiness from 'Business/WithBrowserBussiness';
import transform from 'Transforms/HistoryItem';
import OpacityButton from 'Components/Button/OpacityButton';
import styles from './HistorytemStyles';

function HistoryItem(props) {
  const { item, goToPage } = props;
  const navigation = useNavigation();
  const historyItem = transform(item);

  function onPress() {
    goToPage(historyItem.value);
    navigation.goBack();
  }

  return (
    <OpacityButton
      onPress={onPress}
      isDelayPressIn={true}
      style={styles.historyItemContainer}>
      <View style={styles.historyItemContentContainer}>
        <Text numberOfLines={1} style={styles.historyItemTitle}>
          {historyItem.title}
        </Text>
      </View>
    </OpacityButton>
  );
}

export default WithBrowserBusiness(HistoryItem);
