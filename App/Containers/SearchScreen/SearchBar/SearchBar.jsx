import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import WithSearchBusiness from 'Business/WithSearchBusiness';
import Image from 'Components/FastImage/Image';
import BackArrowButton from 'Components/Button/BackArrowButton';
import images from 'Themes/Images';
import { COOL_GREY } from 'Themes/Colors';
import doNothing from 'Utils/doNothing';
import ClearButton from './ClearButton';
import styles from './SearchBarStyle';

function SearchBar(props) {
  const { onSearch } = props;
  const query = useSelector(state => state.browser.query);

  return (
    <View style={styles.productSearchBarContainer}>
      <View style={styles.searchInputContainer}>
        <Image source={images.iconSearch} style={styles.iconArrowSearch} />
        <TextInput
          placeholder="Tìm kiếm hoặc nhập địa chỉ web"
          placeholderTextColor={COOL_GREY}
          blurOnSubmit
          numberOfLines={1}
          selectionColor="white"
          underlineColorAndroid="transparent"
          autoFocus
          keyboardType="default"
          style={styles.searchInput}
          onChangeText={onSearch}
          value={query}
        />
        <ClearButton />
      </View>
    </View>
  );
}

SearchBar.defaultProps = {
  onSearch: doNothing
};

SearchBar.propTypes = {
  onSearch: PropTypes.func
};

export default WithSearchBusiness(SearchBar);
