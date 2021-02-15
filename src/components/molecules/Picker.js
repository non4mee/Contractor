import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import platform from '../../helpers/platform'

export default function Picker({ text, icon, onPress, disabled, styleButton, styleText }) {
  return (
    <TouchableOpacity  style={[styles.btn, styleButton, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text, styleText}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  text: {
    fontFamily: platform.fontMedium,
  }
})
