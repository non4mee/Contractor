
import { Platform } from 'react-native'
import platform from '../helpers/platform'

export const StackStyle = {
  headerBackTitle: ' ',
  headerTintColor: platform.brandLight,
  headerStyle: {
    backgroundColor: platform.brandSuccess,
    shadowColor: 'transparent'
  }
}

export const TabsStyle = {
  style: {
    backgroundColor: platform.brandSuccess,
    borderTopWidth: 0
  }
}
