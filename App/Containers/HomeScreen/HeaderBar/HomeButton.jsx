import React from 'react';
import PropTypes from 'prop-types';
import Image from 'Components/FastImage/Image';
import WithBrowserBusiness from 'Business/WithBrowserBussiness';
import OpacityButton from 'Components/Button/OpacityButton';
import images from 'Themes/Images';
import doNothing from 'Utils/doNothing';
import styles from './HomeButtonStyle';

function HomeButton({ goToHomePage }) {
  return (
    <OpacityButton onPress={goToHomePage}>
      <Image source={images.iconHome} style={styles.iconHome} />
    </OpacityButton>
  );
}

HomeButton.defaultProps = {
  goToHomePage: doNothing
};

HomeButton.propTypes = {
  goToHomePage: PropTypes.func
};

export default WithBrowserBusiness(HomeButton);
