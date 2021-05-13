import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';

import HistoryItem from './HistoryItem';
import styles from './HistoryListStyle';

function SeparatorComponent(props) {
  return <View style={styles.historyListSeparator} />;
}

function HistoryList(props) {
  const history = useSelector(state => state.browser.history);

  function renderHistoryItem({ item }) {
    return <HistoryItem item={item} />;
  }

  const memoizedValue = useMemo(() => {
    return renderHistoryItem;
  }, []);

  const extract = (item, index) => index.toString();
  return (
    <FlatList
      maxToRenderPerBatch={20}
      removeClippedSubviews={true}
      initialNumToRender={20}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      style={styles.historyListContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      data={history}
      renderItem={memoizedValue}
      keyExtractor={extract}
      ItemSeparatorComponent={SeparatorComponent}
    />
  );
}

export default HistoryList;
