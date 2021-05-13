import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { DARK_GREY, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  historyItemContainer: {
    backgroundColor: WHITE,
    padding: 12,
    flexDirection: 'row'
  },
  historyImage: {
    width: 80 * WIDTH_RATIO,
    height: 80 * WIDTH_RATIO
  },
  historyItemContentContainer: {
    flex: 1,
    paddingLeft: 12,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  historyItemTitle: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.15,
    color: DARK_GREY
  },
  finalPriceContainer: {
    marginTop: 4
  },
  originalPriceContainer: {
    marginTop: 2,
    flexDirection: 'row'
  },
  highlight: {
    backgroundColor: 'yellow'
  }
});
