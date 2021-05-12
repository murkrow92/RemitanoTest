import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import { COOL_GREY } from 'Themes/Colors';
import doNothing from 'Utils/doNothing';
import styles from './HeaderBarStyle';
import HomeButton from './HomeButton';

function HeaderBar(props) {
  const { onChangeText } = props;
  const query = useSelector(state => state.product.query);

  return (
    <View style={styles.productSearchBarContainer}>
      <HomeButton />
      <View style={styles.searchInputContainer}>
        <Image source={images.iconSearch} style={styles.iconArrowSearch} />
        <TextInput
          placeholder="Nhập tên, mã sản phẩm"
          placeholderTextColor={COOL_GREY}
          blurOnSubmit
          numberOfLines={1}
          selectionColor="white"
          underlineColorAndroid="transparent"
          autoFocus
          keyboardType="default"
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={query}
        />
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
