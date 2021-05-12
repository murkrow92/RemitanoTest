import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import OpacityButton from 'Components/Button/OpacityButton';
import doNothing from 'Utils/doNothing';
import styles from './HeaderBarStyle';
import HomeButton from './HomeButton';

function HeaderBar(props) {
  const currentPage = useSelector(state => state.browser.currentPage);

  function onPress() {}

  return (
    <View style={styles.addressBarContainer}>
      <HomeButton />
      <OpacityButton onPress={onPress} style={styles.addressInputContainer}>
        <Text numberOfLines={1} style={styles.address}>
          {currentPage}
        </Text>
      </OpacityButton>
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
