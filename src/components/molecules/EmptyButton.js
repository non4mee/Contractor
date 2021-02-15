import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import platform from '../../helpers/platform'
import Icon from '../../components/Icon'

export default function EmptyButton({  text, image, styleButton, disabled, sourceIcon, onPress, styleText, styleIcon }) {
  return (
    <TouchableOpacity
      style={[styles.btn, styleButton, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
    {sourceIcon && (
      <Image
        source={sourceIcon}
        style={[styles.icon, styleIcon]}
        resizeMode="contain"
      />
    )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btn: {
    width: 330,
    height: 56,
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#7C859F",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  text: {
    fontFamily: platform.fontBold,
    fontSize: 16,
    paddingLeft: 15,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 16
  }
})
