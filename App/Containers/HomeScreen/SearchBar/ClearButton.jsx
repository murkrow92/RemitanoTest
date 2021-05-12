import React from 'react';
import Image from 'Components/FastImage/Image';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import images from 'Themes/Images';
import doNothing from 'Utils/doNothing';
import OpacityButton from 'Components/Button/OpacityButton';
import styles from './ClearButtonStyle';

function ClearButton(props) {
  const { onSearch } = props;
  const query = useSelector(state => state.product.query);

  function onPress() {
    onSearch('');
  }

  const additionalStyle = query.length > 0 ? {} : { opacity: 0 };

  return (
    <OpacityButton style={styles.clearButtonContainer} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={images.iconClose}
        style={[styles.iconClose, additionalStyle]}
      />
    </OpacityButton>
  );
}

OpacityButton.defaultProps = {
  onSearch: doNothing
};

export default ClearButton;
