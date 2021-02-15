import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import platform from '../../helpers/platform'
import Icon from '../../components/Icon'

export default function SimpleButton({ text, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Icon name={icon}/>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btn: {
    borderBottomWidth: 1,
    borderBottomColor: platform.brandGrey,
    marginHorizontal: 19,
    paddingTop: 50,

  },
  text: {
    fontFamily: platform.fontBold,
    fontSize: 16,
    paddingLeft: 15,

  }
})
