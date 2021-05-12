import { StyleSheet } from 'react-native';
import { BLACK_30, COOL_GREY, TOMATO, WHITE } from 'Themes/Colors';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';

export default StyleSheet.create({
  productSearchBarContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: TOMATO,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconArrowBack: {
    width: 24,
    height: 24
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginLeft: 12,
    flex: 1,
    backgroundColor: WHITE,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    shadowColor: BLACK_30,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconArrowSearch: {
    width: 16,
    height: 16
  },
  searchInput: {
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 0,
    flex: 1,
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.15,
    color: COOL_GREY
  }
});
