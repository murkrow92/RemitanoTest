import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import doNothing from 'Utils/doNothing';
import styles from './HeaderBarStyle';
import HomeButton from './HomeButton';

function HeaderBar(props) {
  const query = useSelector(state => state.product.query);

  return (
    <View style={styles.addressBarContainer}>
      <HomeButton />
      <View style={styles.addressInputContainer}>
        <Text numberOfLines={1} style={styles.address}>
          {query}
        </Text>
      </View>
    </View>
  );
}

HeaderBar.defaultProps = {
  onChangeText: doNothing,
  onDeletePress: doNothing,
  onBackPress: doNothing
};

HeaderBar.propTypes = {
  onChangeText: PropTypes.func,
  onDeletePress: PropTypes.func,
  onBackPress: PropTypes.func
};

export default HeaderBar;
