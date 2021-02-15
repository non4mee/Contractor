import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function MessageIcon() {
  return (
    <Image
      source={{ uri: 'https://www.nicepng.com/png/detail/208-2085876_message-comments-message-icon-black-png.png' }}
      style={styles.icon}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 28,
  }
})
