import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import doNothing from 'Utils/doNothing';

function OpacityButton(props) {
  const { onPress, children, isDelayPressIn } = props;
  const delayPressIn = isDelayPressIn ? 500 : 50;

  return (
    <TouchableOpacity {...props} delayPressIn={delayPressIn} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

OpacityButton.defaultProps = {
  onPress: doNothing,
  isDelayPressIn: false
};

OpacityButton.propTypes = {
  onPress: PropTypes.func,
  isDelayPressIn: PropTypes.bool
};

export default OpacityButton;
