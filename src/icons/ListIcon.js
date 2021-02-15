import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function ListIcon() {
  return (
    <Image
      source={{ uri: 'https://www.pngfind.com/pngs/m/623-6239006_add-to-do-list-png-to-do-list.png' }}
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
