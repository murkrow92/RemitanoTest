import React from 'react';
import { View, Text } from 'react-native';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import OpacityButton from './OpacityButton';
import styles from './CartButtonStyles';

function CartButton(props) {
  function onPressCart() {}

  return (
    <OpacityButton onPress={onPressCart}>
      <Image source={images.iconCart} style={styles.iconCart} />
      <View style={styles.cartBadgeContainer}>
        <Text style={styles.cartNumber}>2</Text>
      </View>
    </OpacityButton>
  );
}

CartButton.defaultProps = {};

CartButton.propTypes = {};

export default CartButton;
