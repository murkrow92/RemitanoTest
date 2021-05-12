import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Image from 'Components/FastImage/Image';
import OpacityButton from 'Components/Button/OpacityButton';
import images from 'Themes/Images';
import doNothing from 'Utils/doNothing';
import styles from './HomeButtonStyle';

function HomeButton(props) {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    const action = navigation.canGoBack() ? navigation.goBack : doNothing;
    action();
  }, [navigation]);

  return (
    <OpacityButton onPress={goBack}>
      <Image source={images.iconHome} style={styles.iconHome} />
    </OpacityButton>
  );
}

HomeButton.defaultProps = {
  isBlack: false
};

HomeButton.propTypes = {
  isBlack: PropTypes.bool
};

export default HomeButton;
