import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX =
  platform === 'ios' &&
  ((deviceHeight === 812 || deviceWidth === 812)
    || (deviceHeight === 844 || deviceWidth === 844)
    || (deviceHeight === 896 || deviceWidth === 896)
    || (deviceHeight === 926 || deviceWidth === 926))

export default {
  platformStyle,
  platform,

  // Color
  brandPrimary: '#EB5BEB',
  brandInfo: '#9DB6F9',
  brandSuccess: '#000F2F',
  brandDanger: '#BCFFFF',
  brandWarning: '#09DBDB',
  brandDark: '#7C859F',
  brandLight: '#FFFFFF',
  brandGrey: '#D3D3D3',
  brandDarkGrey: '#747277',
  brandBlack: '#000000',
  brandPink: '#F63A94',
  brandGreen: '#00A74A',
  brandBlue: '#3B5998',
  brandRed: '#EB5757',
  brandRedDark: '#B51F1F',
  brandBrown: '#4F4747',
  defaultBackgroundColor: '#E8EFF9',

  // Font
  fontMedium: 'Montserrat-Medium',
  fontBold: 'Montserrat-Bold',
  fontExtraBold: 'Montserrat-ExtraBold',

  deviceWidth,
  deviceHeight,
  isIphoneX,
  topSpace: isIphoneX ? 44 : 0,
  bottomSpace: isIphoneX ? 34 : 0,

  shadow: platform === 'ios' ? {
    shadowColor: opacify('#002383', 0.3),
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1
  } : {
    elevation: 1
  },

  autocompleteQuery: {
    key: 'AIzaSyDWWQIZ2TVxLriiZw0WwiSJLpzgZe8xL_U',
    language: 'en',
    components: 'country:au',
    types: '(regions)'
  }
}

export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256)
  const hexOpacity = o.toString(16)
  return color.concat(hexOpacity)
}
