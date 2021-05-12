import { ImageProps } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import images from 'Themes/Images';

function Image(props: ImageProps) {
  return <FastImage {...props} defaultSource={images.noImage} />;
}

export default Image;
