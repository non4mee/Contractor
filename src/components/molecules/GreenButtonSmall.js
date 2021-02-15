import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import platform from '../../helpers/platform'
import Icon from '../../components/Icon'

export default function GreenButtonSmall({ text, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Icon name={icon}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btn: {
    width: 293,
    height: 40,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: platform.brandGreen,
  },
  text: {
    fontFamily: platform.fontBold,
    color: platform.brandLight
  }
})
