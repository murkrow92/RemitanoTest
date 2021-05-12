import { Dimensions, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const NORMAL_STATUS_BAR_HEIGHT = Platform.select({
  ios: 20,
  android: StatusBar.currentHeight
});

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const baseWidth = 375;
export const baseHeight = 812;
export const paddingBottom = hasNotch ? 32 : 20;

export const WIDTH_RATIO = deviceWidth / baseWidth;
export const HEIGHT_RATIO = deviceHeight / baseHeight;

const NOTCH_STATUS_BAR_HEIGHT = 44;

export const hasNotch = DeviceInfo.hasNotch();

export const STATUS_BAR_HEIGHT = hasNotch
  ? NOTCH_STATUS_BAR_HEIGHT
  : NORMAL_STATUS_BAR_HEIGHT;

export const EXTRA_HEADER_HEIGHT = hasNotch ? NOTCH_STATUS_BAR_HEIGHT : 0;
export const EXTRA_FOOTER_HEIGHT = hasNotch ? 20 : 0;
