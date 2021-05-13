import React, { useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import transform from 'Transforms/HistoryItem';
import OpacityButton from 'Components/Button/OpacityButton';
import styles from './HistorytemStyles';

function HistoryItem(props) {
  const { item } = props;
  const historyItem = useMemo(() => {
    return transform(item);
  }, [item]);

  console.log('HISTORY ITEM:', historyItem);

  const navigation = useNavigation();

  function gotoHistoryDetail() {
    navigation.navigate('HistoryDetailScreen', {
      historyItem: historyItem
    });
  }

  const memorizedGotoHistoryDetail = useCallback(gotoHistoryDetail, [
    navigation,
    historyItem
  ]);

  return (
    <OpacityButton
      onPress={memorizedGotoHistoryDetail}
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

export default HistoryItem;
