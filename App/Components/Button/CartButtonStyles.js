import { StyleSheet } from 'react-native';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { PUMPKIN_ORANGE, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  iconCart: {
    width: 24,
    height: 24
  },
  cartBadgeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -8,
    right: -8,
    borderRadius: 16,
    width: 16,
    height: 16,
    backgroundColor: PUMPKIN_ORANGE
  },
  cartNumber: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 10,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textAlign: 'center',
    color: WHITE
  }
});
