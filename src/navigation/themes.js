import { Platform, Image } from 'react-native'
import platform from '../helpers/platform'
import BackIcon from '../icons/BackIcon'
import LogoImage from '../icons/LogoImage'

export const StackStyle = {
  headerBackTitle: ' ',
  headerBackImage: BackIcon,
  headerTitle: LogoImage,
  headerTintColor: platform.brandLight,
  gesturesEnabled: false,
  headerForceInset: Platform.OS === 'ios' ? true : undefined,
  headerStyle: {
    backgroundColor: platform.brandSuccess,
    shadowColor: 'transparent'
  }
}

export const TabsStyle = {
  showLabel: false,
  keyboardHidesTabBar: true,
  style: {
    backgroundColor: platform.brandSuccess,
    borderTopWidth: 0
  }
}
