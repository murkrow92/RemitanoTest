import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import WithSearchBusiness from 'Business/WithSearchBusiness';
import WithBrowserBusiness from 'Business/WithBrowserBussiness';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import { COOL_GREY } from 'Themes/Colors';
import doNothing from 'Utils/doNothing';
import ClearButton from './ClearButton';
import styles from './SearchBarStyle';

function SearchBar(props) {
  const { onSearch, goToPage } = props;
  const navigation = useNavigation();
  const query = useSelector(state => state.browser.query);

  const onSubmit = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    goToPage(text);
    navigation.goBack();
  };

  return (
    <View style={styles.productSearchBarContainer}>
      <View style={styles.searchInputContainer}>
        <Image source={images.iconSearch} style={styles.iconArrowSearch} />
        <TextInput
          placeholder="Tìm kiếm hoặc nhập địa chỉ web"
          placeholderTextColor={COOL_GREY}
          blurOnSubmit
          onSubmitEditing={onSubmit}
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

export default WithBrowserBusiness(WithSearchBusiness(SearchBar));
