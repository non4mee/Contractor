import React from 'react'
import platform from '../../helpers/platform'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'

export default function TabIcon({ name }) {
  return (
    <FontAwesome5Pro
      name={name}
      size={30}
      color={platform.brandLight}
    />
  )
}
