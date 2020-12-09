import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platformStyle = undefined

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
}

  export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256)
  const hexOpacity = o.toString(16)
  return color.concat(hexOpacity)
}
